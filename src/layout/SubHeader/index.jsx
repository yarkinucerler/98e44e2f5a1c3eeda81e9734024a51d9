import { useRouter } from 'next/router';
import styled from "styled-components";
import Image from "next/image";
import menuItems from "../../configs/branch.json"
import Link from "next/link";


const SubHeaderWrapper = styled.nav`
  background-color: #192125;
`;

const MenuWrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  max-width: 1240px;
  align-items: center;
`;

const MenuItem = styled.li`
    &:hover, &.active {
     background-color: #384750;   
    }
    
    a {
        gap: 5px;
        color: white;
        display: flex;
        padding: 15px 10px;
        align-items: center;
        text-decoration: none;
    }
`;

const SubHeader = () => {
  const router = useRouter();
  return (
    <SubHeaderWrapper>
      <MenuWrapper>
        {menuItems.map((item) => (
          <MenuItem
            key={`menu_${item.id}`}
            className={router.asPath === item.link ? 'active' : ''}
          >
            <Link href={item.link}>
              <Image src={`/images/icons/${item.slug}.png`} alt={item.name} width="20" height="20"/>
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </MenuWrapper>
    </SubHeaderWrapper>
  );
}

export default SubHeader