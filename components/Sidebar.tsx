import { CgUserlane } from "react-icons/cg";

const Sidebar = () => {
  const listItems = [
    {
      name: "Search",
      icon: CgUserlane,
    },
    {
      name: "Search",
      icon: CgUserlane,
    },
    {
      name: "Search",
      icon: CgUserlane,
    },
    {
      name: "Search",
      icon: CgUserlane,
    },
    {
      name: "Search",
      icon: CgUserlane,
    },
    {
      name: "Search",
      icon: CgUserlane,
    },
  ];
  return (
    <nav className="bg-green-600 h-full w-[200px] flex flex-col p-5">
      <div className="logo flex justify-center items-center">
        <CgUserlane className="text-yellow-500 text-3xl" />
        <h3 className="text-white text-3xl">
          Reci<span className="text-yellow-500">App</span>{" "}
        </h3>
      </div>
      <ul className="flex flex-col gap-5">
        {listItems.map((listItem) => (
          <li key={listItem.name}>{listItem.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
