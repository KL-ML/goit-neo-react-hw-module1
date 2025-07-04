import MenuItem from './MenuItem/MenuItem';
import css from './Sidebar.module.css';
import {
  PiNumberSquareOneLight,
  PiNumberSquareTwoLight,
  PiNumberSquareThreeLight,
  PiNumberSquareFourLight,
  PiNumberSquareFiveLight,
  PiNumberSquareSixLight,
  PiNumberSquareSevenLight,
} from 'react-icons/pi';

export default function Sidebar() {
  return (
    <div className={css.sidebar}>
      <ul className={css.menuList}>
        <MenuItem hwTitle="Components and styling." status={true} link="./">
          <PiNumberSquareOneLight size="20" />
        </MenuItem>
        <MenuItem
          hwTitle="State and life cycle."
          status={false}
          link="https://goit-neo-react-hw-module2-azure.vercel.app/"
        >
          <PiNumberSquareTwoLight size="20" />
        </MenuItem>
        <MenuItem
          hwTitle="Forms."
          status={false}
          link="https://goit-neo-react-hw-module3-mocha-one.vercel.app/"
        >
          <PiNumberSquareThreeLight size="20" />
        </MenuItem>
        <MenuItem
          hwTitle="Hooks."
          status={false}
          link="https://goit-neo-react-hw-module4-psi-nine.vercel.app/"
        >
          <PiNumberSquareFourLight size="20" />
        </MenuItem>
        <MenuItem
          hwTitle="Routing."
          status={false}
          link="https://goit-neo-react-hw-module5-nu-ten.vercel.app/"
        >
          <PiNumberSquareFiveLight size="20" />
        </MenuItem>
        <MenuItem
          hwTitle="Redux basics."
          status={false}
          link="https://goit-neo-react-hw-module6-beta-lovat.vercel.app/"
        >
          <PiNumberSquareSixLight size="20" />
        </MenuItem>
        <MenuItem
          hwTitle="Asynch. Redux, memoization."
          status={false}
          link="https://goit-neo-react-hw-module7-mu-one.vercel.app/"
        >
          <PiNumberSquareSevenLight size="20" />
        </MenuItem>
      </ul>
    </div>
  );
}
