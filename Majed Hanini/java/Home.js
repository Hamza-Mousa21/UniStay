const searchNavLink = document.querySelector('a[href="#search-section"]');
const searchSection = document.getElementById("search-section");

if (searchNavLink && searchSection) {
  searchNavLink.addEventListener("click", function (event) {
    event.preventDefault();
    searchSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}
