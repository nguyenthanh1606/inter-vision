'use client'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import styles from './page.module.css'

export default function HomePage() {
  const t = useTranslations('home')
  const tc = useTranslations('common')

  const doctors = [
    {
      name: t('doctorsList.doc1Name'),
      title: t('doctorsList.doc1Title'),
      desc: t('doctorsList.doc1Desc'),
      lead: true,
      href: '/about/dr-nguyen-hieu-tung' as const
    },
    {
      name: t('doctorsList.doc2Name'),
      title: t('doctorsList.doc2Title'),
      desc: t('doctorsList.doc2Desc'),
      href: '/about/about-i-dent' as const
    },
    {
      name: t('doctorsList.doc3Name'),
      title: t('doctorsList.doc3Title'),
      desc: t('doctorsList.doc3Desc'),
      href: '/about/about-i-dent' as const
    },
    {
      name: t('doctorsList.doc4Name'),
      title: t('doctorsList.doc4Title'),
      desc: t('doctorsList.doc4Desc'),
      href: '/about/about-i-dent' as const
    },
    {
      name: t('doctorsList.doc5Name'),
      title: t('doctorsList.doc5Title'),
      desc: t('doctorsList.doc5Desc'),
      href: '/about/about-i-dent' as const
    },
    {
      name: t('doctorsList.doc6Name'),
      title: t('doctorsList.doc6Title'),
      desc: t('doctorsList.doc6Desc'),
      href: '/about/about-i-dent' as const
    },
    {
      name: t('doctorsList.doc7Name'),
      title: t('doctorsList.doc7Title'),
      desc: t('doctorsList.doc7Desc'),
      href: '/about/about-i-dent' as const
    },
    {
      name: t('doctorsList.doc8Name'),
      title: t('doctorsList.doc8Title'),
      desc: t('doctorsList.doc8Desc'),
      href: '/about/about-i-dent' as const
    }
  ]

  const services = [
    {
      name: t('services.implant'),
      href: '/services/dental-implants' as const,
      icon: '🦷'
    },
    {
      name: t('services.ceramic'),
      href: '/services/dental-crowns' as const,
      icon: '✨'
    },
    {
      name: t('services.treatment'),
      href: '/services/dental-implants' as const,
      icon: '🏥'
    },
    {
      name: t('services.braces'),
      href: '/services/orthodontics' as const,
      icon: '😁'
    }
  ]

  const customerStories = [
    {
      name: t('customerStories.s1Name'),
      origin: t('customerStories.s1Origin'),
      story: t('customerStories.s1Story'),
      href: '/patient-stories/implants' as const
    },
    {
      name: t('customerStories.s2Name'),
      origin: t('customerStories.s2Origin'),
      story: t('customerStories.s2Story'),
      href: '/patient-stories/implants' as const
    },
    {
      name: t('customerStories.s3Name'),
      origin: t('customerStories.s3Origin'),
      story: t('customerStories.s3Story'),
      href: '/patient-stories/implants' as const
    },
    {
      name: t('customerStories.s4Name'),
      origin: t('customerStories.s4Origin'),
      story: t('customerStories.s4Story'),
      href: '/patient-stories/implants' as const
    },
    {
      name: t('customerStories.s5Name'),
      origin: t('customerStories.s5Origin'),
      story: t('customerStories.s5Story'),
      href: '/patient-stories/implants' as const
    },
    {
      name: t('customerStories.s6Name'),
      origin: t('customerStories.s6Origin'),
      story: t('customerStories.s6Story'),
      href: '/patient-stories/implants' as const
    }
  ]

  const blogPosts = [
    {
      title: t('blogPosts.p1Title'),
      excerpt: t('blogPosts.p1Excerpt'),
      href: '/knowledge/news' as const
    },
    {
      title: t('blogPosts.p2Title'),
      excerpt: t('blogPosts.p2Excerpt'),
      href: '/knowledge/news' as const
    },
    {
      title: t('blogPosts.p3Title'),
      excerpt: t('blogPosts.p3Excerpt'),
      href: '/knowledge/news' as const
    },
    {
      title: t('blogPosts.p4Title'),
      excerpt: t('blogPosts.p4Excerpt'),
      href: '/knowledge/news' as const
    },
    {
      title: t('blogPosts.p5Title'),
      excerpt: t('blogPosts.p5Excerpt'),
      href: '/knowledge/news' as const
    },
    {
      title: t('blogPosts.p6Title'),
      excerpt: t('blogPosts.p6Excerpt'),
      href: '/knowledge/news' as const
    }
  ]

  const mediaLinks = [
    { name: 'VTV', url: 'https://vtv.vn/' },
    { name: 'CafeF', url: 'https://cafef.vn/' },
    { name: 'VietnamNet', url: 'https://vietnamnet.vn/' },
    { name: 'Zing News', url: 'https://zingnews.vn/' },
    { name: '24h', url: 'https://www.24h.com.vn/' },
    { name: 'Tuổi Trẻ', url: 'https://tuoitre.vn/' },
    { name: 'Sức Khỏe & Đời Sống', url: 'https://suckhoedoisong.vn/' }
  ]

  const testimonialTitles = [
    t('testimonials.video1'),
    t('testimonials.video2'),
    t('testimonials.video3'),
    t('testimonials.video4'),
    t('testimonials.video5'),
    t('testimonials.video6')
  ]

  return (
    <div className={styles.home}>
      {/* HERO SLIDER */}
      <section className={styles.hero}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className={styles.heroSwiper}
        >
          <SwiperSlide>
            <div
              className={styles.heroSlide}
              style={{
                background: 'linear-gradient(135deg, #025899 0%, #01416f 100%)'
              }}
            >
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  {t('hero.slide1Title')
                    .split('\n')
                    .map((l, i) => (
                      <span key={i}>
                        {l}
                        <br />
                      </span>
                    ))}
                </h1>
                <p className={styles.heroSub}>{t('hero.slide1Sub')}</p>
                <p className={styles.heroDesc}>{t('hero.slide1Desc')}</p>
                <Link href="/services/dental-implants" className="btn-gold">
                  {tc('readMore')}
                </Link>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.heroImgPlaceholder}>
                  <span>🦷</span>
                  <p>Implant Technology</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={styles.heroSlide}
              style={{
                background: 'linear-gradient(135deg, #01416f 0%, #025899 100%)'
              }}
            >
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  {t('hero.slide2Title')
                    .split('\n')
                    .map((l, i) => (
                      <span key={i}>
                        {l}
                        <br />
                      </span>
                    ))}
                </h1>
                <p className={styles.heroSub}>{t('hero.slide2Sub')}</p>
                <p className={styles.heroDesc}>{t('hero.slide2Desc')}</p>
                <Link href="/services/dental-crowns" className="btn-gold">
                  {tc('readMore')}
                </Link>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.heroImgPlaceholder}>
                  <span>✨</span>
                  <p>Dental Veneer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={styles.heroSlide}
              style={{
                background: 'linear-gradient(135deg, #025899 0%, #014e85 100%)'
              }}
            >
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  {t('hero.slide3Title')
                    .split('\n')
                    .map((l, i) => (
                      <span key={i}>
                        {l}
                        <br />
                      </span>
                    ))}
                </h1>
                <p className={styles.heroSub}>{t('hero.slide3Sub')}</p>
                <p className={styles.heroDesc}>{t('hero.slide3Desc')}</p>
                <Link href="/services/orthodontics" className="btn-gold">
                  {tc('readMore')}
                </Link>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.heroImgPlaceholder}>
                  <span>😁</span>
                  <p>Orthodontics</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.appointmentBar}>
          <div className={styles.appointmentInner}>
            <span className={styles.appointmentLabel}>
              {t('appointment.label')}
            </span>
            <input
              type="text"
              placeholder={tc('fullName')}
              className={styles.appointmentInput}
            />
            <input
              type="tel"
              placeholder={tc('phone')}
              className={styles.appointmentInput}
            />
            <button type="button" className="btn-gold">
              {t('appointment.button')}
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <div className={styles.videoPlay}>▶</div>
                <p>{t('video.vtv3')}</p>
              </div>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <div className={styles.videoPlay}>▶</div>
                <p>{t('video.vtv2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('services.title')}</h2>
          <div className={styles.servicesGrid}>
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className={styles.serviceCard}>
                <div className={styles.serviceImageArea}>
                  <div className={styles.serviceOverlay}>
                    <span className={styles.serviceIcon}>{svc.icon}</span>
                  </div>
                </div>
                <div className={styles.serviceName}>
                  {svc.name.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR TEAM */}
      <section className={styles.doctorSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('doctors.title')}</h2>
          <div className={styles.leadDoctor}>
            <div className={styles.leadInfo}>
              <h3 className={styles.leadName}>{t('doctors.leadName')}</h3>
              <p className={styles.leadTitle}>{t('doctors.leadTitle')}</p>
              <ul className={styles.leadDetails}>
                <li>{t('doctors.leadDetail1')}</li>
                <li>{t('doctors.leadDetail2')}</li>
                <li>{t('doctors.leadDetail3')}</li>
              </ul>
              <Link href="/about/dr-nguyen-hieu-tung" className="btn-gold">
                {tc('readMore')}
              </Link>
            </div>
            <div className={styles.leadAvatar}>
              <div className={styles.avatarCircle}>
                <span>👨‍⚕️</span>
              </div>
            </div>
          </div>
          <div className={styles.doctorsCarousel}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{ delay: 3000 }}
              loop
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
              }}
            >
              {doctors
                .filter(d => !d.lead)
                .map((doc, i) => (
                  <SwiperSlide key={i}>
                    <Link href={doc.href} className={styles.doctorCard}>
                      <div className={styles.doctorAvatar}>
                        <span>👨‍⚕️</span>
                      </div>
                      <h4 className={styles.doctorName}>{doc.name}</h4>
                      <p className={styles.doctorTitle}>{doc.title}</p>
                      <p className={styles.doctorDesc}>{doc.desc}</p>
                      <span className={styles.doctorLink}>
                        {tc('readMore')}
                      </span>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <h2 className={styles.statsHeading}>{t('stats.heading')}</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>
                {t('stats.years')
                  .split('\n')
                  .map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>
                {t('stats.tech')
                  .split('\n')
                  .map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>
                {t('stats.implants')
                  .split('\n')
                  .map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>6,000+</div>
              <div className={styles.statLabel}>
                {t('stats.cosmetics')
                  .split('\n')
                  .map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP 10 AWARD */}
      <section className={styles.awardSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('award.title')}</h2>
          <div className={styles.awardContent}>
            <div className={styles.awardImage}>
              <div className={styles.awardPlaceholder}>🏆</div>
            </div>
            <div className={styles.awardText}>
              <p>{t('award.desc')}</p>
              <ul>
                <li>{t('award.point1')}</li>
                <li>{t('award.point2')}</li>
                <li>{t('award.point3')}</li>
                <li>{t('award.point4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('testimonials.title')}</h2>
          <div className={styles.testimonialGrid}>
            {testimonialTitles.map((title, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialThumb}>
                  <div className={styles.videoPlay}>▶</div>
                </div>
                <p className={styles.testimonialTitle}>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section className={styles.storiesSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('stories.title')}</h2>
          <div className={styles.storiesGrid}>
            {customerStories.map((cs, i) => (
              <Link key={i} href={cs.href} className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <div className={styles.storyPlaceholder}>📸</div>
                </div>
                <div className={styles.storyInfo}>
                  <h4 className={styles.storyName}>{cs.name}</h4>
                  <span className={styles.storyOrigin}>{cs.origin}</span>
                  <p className={styles.storyText}>{cs.story}</p>
                  <span className={styles.storyLink}>{tc('viewDetails')}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA / PRESS */}
      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('media.title')}</h2>
          <div className={styles.mediaGrid}>
            {mediaLinks.map((m, i) => (
              <a
                key={i}
                href={m.url}
                target="_blank"
                rel="noreferrer"
                className={styles.mediaCard}
              >
                <div className={styles.mediaLogo}>{m.name}</div>
                <span className={styles.mediaLink}>{tc('viewDetails')}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section className={styles.bookingSection}>
        <div className={styles.container}>
          <h2 className={styles.bookingHeading}>{t('booking.title')}</h2>
          <p className={styles.bookingSub}>{t('booking.desc')}</p>
          <form className={styles.bookingForm}>
            <div className={styles.bookingRow}>
              <input
                type="text"
                placeholder={`${tc('fullName')} *`}
                className={styles.bookingInput}
              />
              <input
                type="tel"
                placeholder={`${tc('phone')} *`}
                className={styles.bookingInput}
              />
              <input
                type="email"
                placeholder={tc('email')}
                className={styles.bookingInput}
              />
            </div>
            <textarea
              placeholder={t('booking.descCondition')}
              className={styles.bookingTextarea}
              rows={4}
            />
            <button
              type="submit"
              className="btn-gold"
              style={{ fontSize: 16, padding: '14px 40px' }}
            >
              {t('booking.button')}
            </button>
          </form>
        </div>
      </section>

      {/* BLOG / KNOWLEDGE */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <h2 className="section-heading">{t('blog.title')}</h2>
          <div className={styles.blogGrid}>
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.href} className={styles.blogCard}>
                <div className={styles.blogThumb}>
                  <div className={styles.blogCategory}>Implant</div>
                </div>
                <div className={styles.blogInfo}>
                  <h4 className={styles.blogTitle}>{post.title}</h4>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <span className={styles.blogLink}>{tc('readMore')}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
