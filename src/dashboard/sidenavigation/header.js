const inlineStyle = {
  backgroundColor: '#f96057',
  boxShadow: '24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65',
};

const SidenavHeader = () => (
  <div className="flex h-20 items-center justify-start pl-4 lg:pl-8">
    <div className="h-4 rounded-full w-4" style={inlineStyle} />
  </div>
);

export default SidenavHeader;
