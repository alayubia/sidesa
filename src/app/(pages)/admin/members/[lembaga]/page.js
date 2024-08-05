"use client"

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Container, Button, TextInput, Title, Modal } from '@mantine/core';
import AdminMembersTable from '@/app/components/Admin/MembersTable';
import AdminHeader from '@/app/components/Admin/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function AdminPage() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const lembaga = pathname.split('/').pop();
  const [members, setMembers] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [newMember, setNewMember] = useState({ id: '', name: '', position: '', address: '', gender: '', lembaga: '' });

  const fetchMembers = async () => {
    const res = await fetch(`/api/members?lembaga=${encodeURIComponent(lembaga)}`);
    const data = await res.json();
    setMembers(data);
    setLoading(false);
  };

  useEffect(() => {
    if (lembaga) {
      fetchMembers();
    }
  }, [lembaga]);

  const handleAddMember = async () => {
    const method = newMember.id ? 'PUT' : 'POST';
    await fetch('/api/members', {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    });
    fetchMembers();
    setModalOpened(false);
    resetNewMember();
  };

  const handleDeleteMember = async (id) => {
    await fetch('/api/members', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchMembers();
  };

  const handleEditMember = (member) => {
    setNewMember(member);
    setModalOpened(true);
  };

  const resetNewMember = () => {
    setNewMember({ id: '', name: '', position: '', address: '', gender: '', lembaga: '' });
  };

  if (loading) {
    return <CenteredLoader />;
  }

  return (
    <div>
      <AdminHeader />
      <div className='bg-white mb-14 py-4'>
        <Container>
          <Title align="center" mb="lg">{`Lembaga ${lembaga}`}</Title>
          <Button onClick={() => { resetNewMember(); setModalOpened(true); }}>Add Anggota</Button>
          <AdminMembersTable title="Members" members={members} onEdit={handleEditMember} onDelete={handleDeleteMember}/>
          <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title={newMember.id ? "Edit Member" : "Add New Member"}>
            <TextInput
              label="Name"
              placeholder="Name"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.currentTarget.value })}
            />
            <TextInput
              label="Position"
              placeholder="Position"
              value={newMember.position}
              onChange={(e) => setNewMember({ ...newMember, position: e.currentTarget.value })}
            />
            <TextInput
              label="Address"
              placeholder="Address"
              value={newMember.address}
              onChange={(e) => setNewMember({ ...newMember, address: e.currentTarget.value })}
            />
            <TextInput
              label="Gender"
              placeholder="Gender"
              value={newMember.gender}
              onChange={(e) => setNewMember({ ...newMember, gender: e.currentTarget.value })}
            />
            <TextInput
              label="Lembaga"
              placeholder="Lembaga"
              value={newMember.lembaga}
              onChange={(e) => setNewMember({ ...newMember, lembaga: e.currentTarget.value })}
            />
            <Button onClick={handleAddMember} fullWidth mt="md">{newMember.id ? "Update Member" : "Add Member"}</Button>
          </Modal>
        </Container>
      </div>
      <AppFooter />
    </div>
  );
}
