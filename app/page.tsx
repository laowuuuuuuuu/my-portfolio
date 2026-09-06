import Link from "next/link";

// 作品集首页组件
export default function Home() {
  return (
    // 主容器（留出顶部导航栏空间）
    <div className="h-[calc(100vh-64px)] text-zinc-800 dark:text-zinc-100">
      {/* 居中内容区域 */}
      <div className="h-full w-full flex flex-col items-center justify-center px-4 text-center">
        {/* 内容区块 */}
        <div className="space-y-8 max-w-2xl">
          {/* 渐变标题 */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 text-transparent bg-clip-text">
            欢迎访问
          </h1>

          {/* 个人简介 */}
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">
            我是laowuuu，就读于JK University。
          </p>

          {/* 项目入口按钮 */}
          <Link
            href="/projects"
            className="inline-block px-8 py-4 mt-8 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 dark:from-sky-400 dark:to-blue-400 dark:hover:from-sky-500 dark:hover:to-blue-500 text-white font-medium rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
          >
            查看出版物
          </Link>
        </div>
      </div>
    </div>
  );
}
