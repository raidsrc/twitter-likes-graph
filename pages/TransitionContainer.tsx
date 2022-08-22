import { CSSTransition } from "react-transition-group"
import { useRouter } from "next/router"

export default function TransitionContainer({ children }) {
  const router = useRouter()
  return (
    <div>
      <CSSTransition in={router.asPath === "/"} classNames="index" timeout={3000}>
        <CSSTransition in={router.asPath === "/why"} classNames="index" timeout={3000}>
          <CSSTransition in={router.asPath === "/twitter-api"} classNames="index" timeout={3000}>
            <CSSTransition in={router.asPath === "/data"} classNames="index" timeout={3000}>
              <CSSTransition in={router.asPath === "/graph"} classNames="index" timeout={3000}>
                <CSSTransition in={router.asPath === "/wrap"} classNames="index" timeout={3000}>
                  {children}
                </CSSTransition>
              </CSSTransition>
            </CSSTransition>
          </CSSTransition>
        </CSSTransition>
      </CSSTransition>
    </div>
  )
}