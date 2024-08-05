import { Anchor, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="bg-[#618264] gap-6 w-full flex justify-center items-center">
      <Link href="/" passHref legacyBehavior>
        <Anchor style={{color: 'white', fontWeight: 'bold'}}>
          Beranda
        </Anchor>
      </Link>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/sejarah" passHref legacyBehavior>
        <Anchor style={{color: 'white', fontWeight: 'bold'}}>Sejarah Desa</Anchor>
      </Link>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/profil" passHref legacyBehavior>
        <Anchor style={{color: 'white', fontWeight: 'bold'}}>Profil Desa</Anchor>
      </Link>
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
              <Anchor style={{color: 'white', fontWeight: 'bold'}}>BPD</Anchor>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', backgroundColor: '#618264' }}>
            <Link href="/lembaga/PKK" passHref legacyBehavior>
              <Anchor style={{color: 'white', fontWeight: 'bold'}}>PKK</Anchor>
            </Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/families" passHref legacyBehavior>
        <Anchor style={{color: 'white', fontWeight: 'bold'}}>Arsip Data</Anchor>
      </Link>
      <span style={{ margin: '0 10px', borderLeft: '1px solid #B0D9B1', height: '40px' }}></span>
      <Link href="/login" passHref legacyBehavior>
        <Anchor style={{color: 'white', fontWeight: 'bold'}}>Login</Anchor>
      </Link>
    </header>
  );
}
