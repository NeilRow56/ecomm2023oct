import Navbar from '@/components/Navbar'
import ToasterProvider from '@/providers/ToastProvider'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="fixed inset-y-0 h-[80px] w-full  md:pl-56">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col  md:flex"></div>
      <ToasterProvider />
      <main className="h-full pt-[80px] md:pl-56">{children}</main>
    </div>
  )
}
export default DashboardLayout
