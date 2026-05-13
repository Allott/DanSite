import Head from 'next/head'
import { useEffect, useState } from 'react'
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
        }}
      >
        <img
          src="/pictures/wedding/snwdrps.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[5px] bottom-[5px] h-auto w-[clamp(225px,40vw,650px)] max-w-[45vw]"
        />

        <img
          src="/pictures/wedding/snwdrps.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[5px] bottom-[5px] h-auto w-[clamp(225px,40vw,650px)] max-w-[45vw] [transform:scaleX(-1)]"
        />

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '18px',
            width: 'min(720px, 90vw)',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2.25rem' }}>Save the date</h1>

          <img
            src="/pictures/wedding/bridge.png"
            alt="Wedding bridge"
            className="h-auto max-h-[30vh] w-screen max-w-none ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] sm:w-full sm:max-w-none sm:ml-0 sm:mr-0"
          />

          <p style={{ margin: 0, lineHeight: 1.6 }}>
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
                border: '2px solid #0f0f0f',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                backgroundColor: '#fff',
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

              <p style={{ margin: 0, textAlign: 'left', lineHeight: 1.5 }}>
                You are also invited to Dans 30th on [placeholder date] at
                [placeholder location]
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