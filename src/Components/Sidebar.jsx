// const style = {
//   width: "280px",
//   height: "100vh",
// };
const Sidebar = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-secondary w-25 vh-100">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4 text-dark">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column  mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark">
            Aadhar
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-dark">
            Pan
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
