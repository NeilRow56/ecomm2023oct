import Navbar from '@/components/Navbar'
import ToasterProvider from '@/providers/ToastProvider'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="fixed inset-y-0 h-[80px] w-full  ">
        <Navbar />
      </div>

      <ToasterProvider />
      <main className="h-full pt-[80px] ">{children}</main>
    </div>
  )
}
export default DashboardLayout
