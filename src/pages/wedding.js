import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const targetDate = new Date('2027-10-02T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    done: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function Wedding() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    done: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setTimeLeft(getTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [dragonfly, setDragonfly] = useState({ x: 50, y: 30 })
  const [dragonflyFrame, setDragonflyFrame] = useState(1)
  const dragonflyTarget = useRef({ x: 50, y: 30 })
  const dragonflyPos = useRef({ x: 50, y: 30 })
  const dragonflyFrameRef = useRef(1)

  const [dragonfly2, setDragonfly2] = useState({ x: 30, y: 60 })
  const [dragonflyFrame2, setDragonflyFrame2] = useState(3)
  const dragonflyTarget2 = useRef({ x: 30, y: 60 })
  const dragonflyPos2 = useRef({ x: 30, y: 60 })
  const dragonflyFrameRef2 = useRef(3)

  useEffect(() => {
    function pickNewTarget() {
      dragonflyTarget.current = {
        x: 5 + Math.random() * 90,
        y: 5 + Math.random() * 70,
      }
      const next = (dragonflyFrameRef.current % 4) + 1
      dragonflyFrameRef.current = next
      setDragonflyFrame(next)
    }
    pickNewTarget()

    let lastTime = null
    let rafId
    function animate(time) {
      if (lastTime !== null) {
        const speed = 0.004
        const dx = dragonflyTarget.current.x - dragonflyPos.current.x
        const dy = dragonflyTarget.current.y - dragonflyPos.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 1) {
          pickNewTarget()
        } else {
          dragonflyPos.current = {
            x: dragonflyPos.current.x + dx * speed,
            y: dragonflyPos.current.y + dy * speed,
          }
          setDragonfly({ ...dragonflyPos.current })
        }
      }
      lastTime = time
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    function pickNewTarget2() {
      dragonflyTarget2.current = {
        x: 5 + Math.random() * 90,
        y: 5 + Math.random() * 70,
      }
      const next = (dragonflyFrameRef2.current % 4) + 1
      dragonflyFrameRef2.current = next
      setDragonflyFrame2(next)
    }
    pickNewTarget2()

    let lastTime = null
    let rafId
    function animate(time) {
      if (lastTime !== null) {
        const speed = 0.003
        const dx = dragonflyTarget2.current.x - dragonflyPos2.current.x
        const dy = dragonflyTarget2.current.y - dragonflyPos2.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 1) {
          pickNewTarget2()
        } else {
          dragonflyPos2.current = {
            x: dragonflyPos2.current.x + dx * speed,
            y: dragonflyPos2.current.y + dy * speed,
          }
          setDragonfly2({ ...dragonflyPos2.current })
        }
      }
      lastTime = time
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const showDan30Card =
    router.isReady && Object.prototype.hasOwnProperty.call(router.query, 'dan30')

  return (
    <>
      <Head>
        <title>Wedding</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#fdf8f0',
        }}
      >
        <img
          src="/pictures/wedding/snwdrps.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[5px] bottom-[5px] h-auto w-[clamp(225px,40vw,650px)] max-w-[min(400px,45vw)]"
        />

        <img
          src="/pictures/wedding/snwdrps.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[5px] bottom-[5px] h-auto w-[clamp(225px,40vw,650px)] max-w-[min(400px,45vw)] [transform:scaleX(-1)]"
        />

        <section
          className="sm:mt-[-80px]"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '18px',
            width: 'min(720px, 90vw)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <img
              src="/pictures/wedding/chrryblssm.png"
              alt=""
              aria-hidden="true"
              className="h-auto w-[90px]"
            />
            <h1 style={{ margin: 0, fontSize: '2.25rem' }}>Save the date</h1>
            <img
              src="/pictures/wedding/chrryblssm.png"
              alt=""
              aria-hidden="true"
              className="h-auto w-[90px] [transform:scaleX(-1)]"
            />
          </div>

          <img
            src="/pictures/wedding/bridge.png"
            alt="Wedding bridge"
            className="h-auto max-h-[30vh] w-screen max-w-none ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] sm:w-full sm:max-w-none sm:ml-0 sm:mr-0"
          />

          <p style={{ margin: 0, lineHeight: 1.6, fontWeight: 'bold' }}>
            Han &amp; Dan
            <br />
            Are getting married
            <br />
            02-10-27
            <br />
            Manchester
            <br />
            Formal invitation to follow
          </p>

          {showDan30Card && (
            <article
              style={{
                width: 'min(720px, 90vw)',
                border: '2px solid #8b0000',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                backgroundColor: '#c8a0a0',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <img
                src="/pictures/me.png"
                alt="Dan 30 invite"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  flexShrink: 0,
                }}
              />

              <p style={{ margin: 0, textAlign: 'left', lineHeight: 1.5, fontWeight: 'bold' }}>
                You are also invited to Dans 30th birthday on 5th of December 2026 at
                a Glossop pub
              </p>
            </article>
          )}

          <div
            className="sm:hidden"
            style={{
              padding: '12px 24px',
              width: 'fit-content',
            }}
          >
            <p
              style={{
                margin: 0,
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              {timeLeft.done
                ? 'It is wedding day!'
                : `${timeLeft.days}d ${String(timeLeft.hours).padStart(2, '0')}h ${String(
                    timeLeft.minutes
                  ).padStart(2, '0')}m ${String(timeLeft.seconds).padStart(2, '0')}s`}
            </p>
          </div>
        </section>

        <img
          src={`/pictures/wedding/drgnfly_${dragonflyFrame}.png`}
          alt=""
          aria-hidden="true"
          style={{
            position: 'fixed',
            left: `${dragonfly.x}vw`,
            top: `${dragonfly.y}vh`,
            width: '40px',
            height: 'auto',
            zIndex: 9999,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
          }}
        />

        <img
          src={`/pictures/wedding/drgnfly_${dragonflyFrame2}.png`}
          alt=""
          aria-hidden="true"
          className="hidden sm:block"
          style={{
            position: 'fixed',
            left: `${dragonfly2.x}vw`,
            top: `${dragonfly2.y}vh`,
            width: '40px',
            height: 'auto',
            zIndex: 9999,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
          }}
        />

        <div
          className="hidden sm:block"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '16px',
            padding: '6px 12px',
            width: 'fit-content',
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {timeLeft.done
              ? 'It is wedding day!'
              : `${timeLeft.days}d ${String(timeLeft.hours).padStart(2, '0')}h ${String(
                  timeLeft.minutes
                ).padStart(2, '0')}m ${String(timeLeft.seconds).padStart(2, '0')}s`}
          </p>
        </div>
      </main>
    </>
  )
}