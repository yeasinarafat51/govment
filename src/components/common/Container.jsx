import { cn } from "../../lib/uliti"


const Container = ({children,className}) => {
  return (
    <div className={cn("w-full max-w-screen-xl px-2.5 mx-auto", className)}>
      {children}
    </div>
  )
}

export default Container
