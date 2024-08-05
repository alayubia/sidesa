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
                    <Menu trigger="hover" openDelay={100} closeDelay={200} width={160}>
                        <Menu.Target>
                            <Anchor style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
                                Lembaga <IconChevronDown size={16} style={{ marginLeft: 4 }} />
                            </Anchor>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
                                <Link href="/admin/members/BPD" passHref legacyBehavior>
                                    <Anchor style={{color: 'white', fontWeight: 'bold'}}>BPD</Anchor>
                                </Link>
                            </Menu.Item>
                            <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
                                <Link href="/admin/members/PKK" passHref legacyBehavior>
                                    <Anchor style={{color: 'white', fontWeight: 'bold'}}>PKK</Anchor>
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Link href="/admin/families" passHref legacyBehavior>
                        <Anchor style={{color: 'white', fontWeight: 'bold'}}>Arsip Data</Anchor>
                    </Link>
                    <span style={{ margin: '0 20px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
                    <Anchor onClick={handleLogout} style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold' }}>Logout</Anchor>
                </div>
            )}
        </header>
    );
}
