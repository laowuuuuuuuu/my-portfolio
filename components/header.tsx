"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 处理菜单开关逻辑
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    // 移动端禁止背景滚动
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    
    // 监听ESC键
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full h-16 px-6 bg-sky-50 dark:bg-zinc-900 border-b border-sky-100/20 fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* 品牌标识 */}
        <Link 
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 text-transparent bg-clip-text"
        >
          我的作品集
        </Link>

        {/* 桌面导航（大屏显示） */}
        <div className="hidden md:flex gap-8">
          <NavLink href="/">首页</NavLink>
          <NavLink href="/projects">项目</NavLink>
        </div>

        {/* 移动菜单按钮（小屏显示） */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-sky-100/50 dark:hover:bg-zinc-800/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="切换菜单"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>

        {/* 移动菜单遮罩 */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* 移动菜单内容 */}
        <div className={`md:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-sky-50 dark:bg-zinc-900 shadow-lg transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-4 space-y-2">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              首页
            </MobileNavLink>
            <MobileNavLink href="/projects" onClick={() => setIsMenuOpen(false)}>
              项目
            </MobileNavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

// 辅助组件：菜单图标
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    {isOpen ? (
      <path stroke="currentColor" d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path stroke="currentColor" d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

// 辅助组件：导航链接
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
    {children}
  </Link>
);

// 辅助组件：移动端导航链接
const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    href={href}
    onClick={onClick}
    className="block py-3 px-4 rounded-lg hover:bg-sky-100/50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300"
  >
    {children}
  </Link>
);