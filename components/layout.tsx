import {
  Footer,
  FooterMenuItem as FooterMenuItemType,
  Header,
  PreviewRibbon,
} from "@pantheon-systems/nextjs-kit"

import styles from "./layout.module.css"
import SearchInput from "./search-input"

interface FooterMenuItem extends FooterMenuItemType {
  title: string
  url: string
  href: string
  parent?: string | null
}

type Props = {
  children: React.ReactNode
  footerMenu?: FooterMenuItem[]
  preview?: boolean
}

export default function Layout({
  children,
  footerMenu,
  preview = false,
}: Props) {
  const navItems = [
    { linkText: "🏠 Home", href: "/" },
    { linkText: "📰 Articles", href: "/articles" },
    { linkText: "📑 Pages", href: "/pages" },
    { linkText: "⚛️ Examples", href: "/examples" },
  ]
  const footerMenuItems = footerMenu?.map(({ title, url, parent }) => ({
    linkText: title,
    href: url,
    parent: parent,
  }))

  return (
    <div className={"flex flex-col min-w-full min-h-screen"}>
      {preview && <PreviewRibbon />}
      <div className={` mx-auto flex flex-row flex-wrap justify-center`}>
        <Header navItems={navItems} />
        <SearchInput />
      </div>
      <main className="mb-auto">{children}</main>
      {/* <Footer footerMenuItems={footerMenuItems!}> */}
      <span className="my-0 mx-auto">
        © {new Date().getFullYear()} Built with{" "}
        <a href="https://nextjs.org/">Next.js</a> and{" "}
        <a href="https://www.drupal.org/">Drupal</a>
      </span>
      {/* </Footer> */}
    </div>
  )
}
