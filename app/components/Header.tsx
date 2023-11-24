import Link from "next/link";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between p-5 bg-[#606F52] rounded container mx-auto mb-5 text-white">
        <h3>Logo</h3>
        <nav>
          <ul className="flex flex-row gap-5">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/admin">
              <li>Admin</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
