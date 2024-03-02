import '../styles/globals.css'



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed overflow-y-auto top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <div className="p-4 max-w-[100rem] px-52 mx-auto w-full">{children}</div>
        </div>
      </body>
    </html>
  )
}
