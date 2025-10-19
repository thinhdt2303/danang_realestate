import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-50 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Left - Logo */}
        <div className="flex font-bold text-slate-800">
          <Link to="/">
            <h1 className="text-lg sm:text-xl tracking-tight">
              <span className="text-blue-600">DaNang</span>
              <span className="text-green-600">Estate</span>
            </h1>
          </Link>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <form
            className="flex items-center bg-white rounded-full px-3 py-2 shadow-inner"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-transparent outline-none flex-1 text-sm text-slate-700 placeholder-slate-400"
            />
            <button type="submit">
              <FaSearch className="text-slate-500 hover:text-blue-600 transition-colors duration-200" />
            </button>
          </form>
        </div>

        {/* Right - Navigation */}
        <nav>
          <ul className="flex gap-4 text-slate-700 font-medium">
            <Link to="/">
              <li className="hidden sm:inline hover:text-blue-600 transition-colors">Trang chủ</li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline hover:text-blue-600 transition-colors">Giới thiệu</li>
            </Link>
            <Link to="/sign-in">
              <li className="hover:text-blue-600 transition-colors">Đăng nhập</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
