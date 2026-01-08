import { toggleNavbar } from "@flexilla/utilities";
import { initAppTheme } from "./theme";

toggleNavbar({
  navbarElement: "[data-app-navbar]",
  onToggle: ({ isExpanded }) => {
    document.body.classList[!isExpanded ? "add" : "remove"](
      "overflow-y-hidden"
    );
  },
});

initAppTheme()