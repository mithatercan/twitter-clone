import {
  RiFileList2Line,
  RiHome4Line,
  FiSearch,
  FiMail,
  FaTwitter,
  IoMdNotificationsOutline,
  BsBookmark,
  CgProfile,
} from "react-icons/all";

const sidebarLinks = [
  {
    text: "",
    path: "/home",
    icon: FaTwitter,
    class: "twitter",
  },
  {
    text: "Home",
    path: "/home",
    icon: RiHome4Line,
    class: "home",
  },
  {
    text: "Explore",
    path: "/explore",
    icon: FiSearch,
    class: "explore",
  },
  {
    text: "Notification",
    path: "/notifications",
    icon: IoMdNotificationsOutline,
    class: "notification",
  },
  {
    text: "Message",
    path: "/notifications",
    icon: FiMail,
    class: "message",
  },
  {
    text: "Bookmark",
    path: "/bookmarks",
    icon: BsBookmark,
    class: "bookmark",
  },
  {
    text: "List",
    path: "/lists",
    icon: RiFileList2Line,
    class: "list",
  },
  {
    text: "Profile",
    path: "/profile/",
    icon: CgProfile,
    class: "profile",
  },
];

export default sidebarLinks;
