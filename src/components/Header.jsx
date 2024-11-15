
export default function Header() {
  return (
    <div>
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" className="h-5 cursor-pointer"/>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>Home</li>
                <li>Offers</li>
                <li>Sign In</li>
              </ul>
            </div>
        </header>
    </div>
  )
}
