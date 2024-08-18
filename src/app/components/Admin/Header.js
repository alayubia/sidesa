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
                <div className='flex justify-center items-center'>
                    <Link href="/admin/keluhan" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Keluhan</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/families" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Arsip Data</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/potensi" passHref legacyBehavior>
                        <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Potensi</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Menu trigger="hover" openDelay={100} closeDelay={200} width={140}>
                        <Menu.Target>
                            <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold', marginLeft: '4px' }}>
                                Informasi Umum <IconChevronDown size={16} style={{ marginLeft: 4 }} />
                            </Anchor>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
                                <Link href="/admin/daftarAgama" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Agama</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/admin/demografi" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Demografi</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/admin/mataPencaharianPokok" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Mata Pencaharian</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/admin/pendidikan" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Pendidikan</Anchor>
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
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
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/admin/members/PKK" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>PKK</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/lembaga/RTRW" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>RT/RW</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/lembaga/KarangTaruna" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Karang Taruna</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/lembaga/LPMD" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>LPMD</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="/lembaga/KelompokTani" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Kelompok Tani</Anchor>
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Menu trigger="hover" openDelay={100} closeDelay={200} width={200}>
                        <Menu.Target>
                            <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold', marginLeft: '4px' }}>
                                Form <IconChevronDown size={16} style={{ marginLeft: 4 }} />
                            </Anchor>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKGyb4cC2YuajD_Ye4ymK0mZvbmIIohA1WhxZCeRm0pvlG3Q/viewform" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>SKTM sekolah & kuliah</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdaxriIy7wJZf1jq3lrpkb2a6-e5h-QVnPyigpw4bzjT3LpmQ/viewform" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Surat kehilangan</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSey_GN0cJHffFIslHBrwvnWkaDSabNC2XZQ9g3hy64L7oSDpQ/viewform" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Surat beda nama</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfh07YS2hJLfDKt-EEsgelUi9sFNSMyC0VNCL-jRXUSFEO82A/viewform" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Surat SKCK</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdvUwoFIqvmZdJqbXWbCIRrn3ORc5NMtbGlhXfNRS4i-IQD8w/viewform" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Surat belum menikah</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264', marginTop: '2px' }}>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecDyjgoSypRT2rmSYG3kZxOASKzAdZAAjuu67wcQHbSFp-wA/viewform" passHref legacyBehavior>
                                    <Anchor style={{ color: 'white', fontWeight: 'bold' }}>Surat kematian</Anchor>
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Anchor onClick={handleLogout} style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold' }}>Logout</Anchor>
                </div>
            )}
        </header>
    );
}
