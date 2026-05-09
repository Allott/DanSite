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
        }}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '18px',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2.25rem' }}>Save the date</h1>

          <img
            src="/pictures/me.png"
            alt="Wedding placeholder"
            style={{ maxWidth: '45vw', maxHeight: '30vh' }}
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
        </section>

        <p
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            margin: 0,
            textAlign: 'center',
            width: '100%',
            padding: '0 24px',
          }}
        >
          {timeLeft.done
            ? 'It is wedding day!'
            : `${timeLeft.days}d ${String(timeLeft.hours).padStart(2, '0')}h ${String(
                timeLeft.minutes
              ).padStart(2, '0')}m ${String(timeLeft.seconds).padStart(2, '0')}s`}
        </p>
      </main>
    </>
  )
}