import { Anchor, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AppHeader() {
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  return (
    <header className="bg-[#618264] gap-6 w-full flex justify-center items-center">
      <Link href="/" passHref legacyBehavior>
        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>
          Beranda
        </Anchor>
      </Link>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/sejarah" passHref legacyBehavior>
        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Sejarah Desa</Anchor>
      </Link>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/profil" passHref legacyBehavior>
        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Profil Desa</Anchor>
      </Link>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Menu trigger="hover" openDelay={100} closeDelay={200} width={140}>
        <Menu.Target>
          <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
            Informasi Umum <IconChevronDown size={16} style={{ marginLeft: 4 }} />
          </Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/daftarAgama" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Agama</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/demografi" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Demografi</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/mataPencaharianPokok" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Mata Pencaharian</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/pendidikan" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Pendidikan</Anchor>
            </Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Menu trigger="hover" openDelay={100} closeDelay={200} width={120}>
        <Menu.Target>
          <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
            Lembaga <IconChevronDown size={16} style={{ marginLeft: 4 }} />
          </Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/BPD" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>BPD</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/PKK" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>PKK</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/RTRW" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>RT/RW</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/KarangTaruna" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Karang Taruna</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/LPMD" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>LPMD</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/KelompokTani" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Kelompok Tani</Anchor>
            </Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Menu trigger="hover" openDelay={100} closeDelay={200} width={120}>
        <Menu.Target>
          <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
            Form <IconChevronDown size={16} style={{ marginLeft: 4 }} />
          </Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="#" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Form 1</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="#" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Form 2</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="#" passHref legacyBehavior>
              <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Form 3</Anchor>
            </Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/login" passHref legacyBehavior>
        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Login</Anchor>
      </Link>
    </header>
  );
}
