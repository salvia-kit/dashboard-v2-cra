import css from './style.module.css';
import Overlay from './utils/overlay';
import TopNavigation from './topnavigation';
import SideNavigation from './sidenavigation';
import DashboardProvider from './utils/context';

const style = {
  container: `${css.container} bg-mac bg-center bg-cover h-screen overflow-hidden w-full lg:p-4`,
  content: `${css.content} h-screen overflow-hidden relative lg:rounded-2xl`,
  main: `${css.main} h-screen overflow-auto pb-36 pt-4 px-2 text-black md:pb-8 md:px-4 lg:mt-4 lg:px-6`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:space-py-4 lg:w-99`,
};

const DashboardLayout = ({ children }) => (
  <DashboardProvider>
    <div className={style.container}>
      <div className={style.content}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </div>
  </DashboardProvider>
);

export default DashboardLayout;
