import { Anchor, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { useAuth } from '@/lib/middleware';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
    const user = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <header className="bg-[#618264] gap-6 w-full flex justify-center items-center">
            {user && (
                <div className='flex items-center'>
                    <Link href="/admin/keluhan" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Keluhan</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/families" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Arsip Data</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Menu trigger="hover" openDelay={100} closeDelay={200} width={160}>
                        <Menu.Target>
                            <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
                                Lembaga <IconChevronDown size={16} style={{ marginLeft: 4 }} />
                            </Anchor>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
                                <Link href="/admin/members/BPD" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>BPD</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
                                <Link href="/admin/members/PKK" passHref legacyBehavior>
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
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/daftarAgama" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Agama</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/demografi" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Demografi</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/mataPencaharianPokok" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Mata Pencaharian</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/pendidikan" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Pendidikan</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/potensi" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Potensi</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Anchor onClick={handleLogout} style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold' }}>Logout</Anchor>
                </div>
            )}
        </header>
    );
}
