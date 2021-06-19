import SidenavItems from './items';
import SidenavHeader from './header';
import css from '../style.module.css';
import { useToggle } from '../utils/context';

const style = {
  close: `hidden`,
  container: `pb-32 lg:pb-6`,
  default: `bg-gray-200 overflow-y-auto h-screen top-0 lg:bg-transparent lg:block lg:relative lg:w-64 lg:z-auto`,
  open: `w-8/12 absolute z-40 sm:w-5/12`,
  mobilePosition: {
    left: 'left-0',
    right: 'right-0',
  },
};

const SideNavigation = ({ mobilePosition }) => {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${css.sidenavScrollbar}
      ${style.mobilePosition[mobilePosition]} 
      ${open ? style.open : style.close}`}
    >
      <div className={style.container}>
        <SidenavHeader />
        <ul className="mt-6 md:pl-6">
          <SidenavItems />
        </ul>
      </div>
    </aside>
  );
};

export default SideNavigation;
