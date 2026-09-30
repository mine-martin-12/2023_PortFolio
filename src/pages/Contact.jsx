import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiLoader4Line,
  RiMailLine,
  RiMailSendLine,
  RiMapPin2Line,
  RiPhoneLine,
} from 'react-icons/ri';
import Footer from '../components/Footer';
import ResumeButton from '../components/ResumeButton';
import Socials from '../components/Socials';
import Section, { SectionHeading } from '../components/Section';
import { contactForm, profile } from '../data/site';

const contactItems = [
  { icon: RiMailLine, label: profile.email, href: `mailto:${profile.email}` },
  { icon: RiPhoneLine, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: RiMapPin2Line, label: profile.location },
];

// Pre-filled email so a message can always be sent, even if the form service is down
const mailtoLink = ({ name = '', email = '', subject = '', message = '' }) => {
  const body = `${message}\n\n${name}${email ? ` (${email})` : ''}`.trim();
  return `mailto:${profile.email}?subject=${encodeURIComponent(
    subject || 'Hello from your portfolio'
  )}&body=${encodeURIComponent(body)}`;
};

const sendViaWeb3Forms = async (fields) => {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: contactForm.web3formsKey,
      from_name: 'Portfolio contact form',
      subject: `Portfolio: ${fields.subject}`,
      name: fields.name,
      email: fields.email,
      message: `Subject: ${fields.subject}\n\n${fields.message}`,
      botcheck: fields.botcheck,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
};

const Contact = () => {
  // idle | sending | sent | mailto | error
  const [status, setStatus] = useState('idle');
  const [fallbackHref, setFallbackHref] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(new FormData(form));

    // honeypot: bots fill hidden fields, people don't
    if (fields.botcheck) return;

    const href = mailtoLink(fields);
    setFallbackHref(href);

    if (!contactForm.web3formsKey) {
      window.location.href = href;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      await sendViaWeb3Forms(fields);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative pt-16">
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Get in Touch"
          title="Let's build something together."
          subtitle="Have a project in mind, a system to fix, or a role to fill? Send a message and I will reply within a day."
        />

        <div className="grid items-start gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <div key={label} className="card flex items-center gap-4 !p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-lg text-accent">
                  <Icon aria-hidden="true" />
                </span>
                {href ? (
                  <a href={href} className="text-sm transition-colors hover:text-accent">
                    {label}
                  </a>
                ) : (
                  <span className="text-sm text-on-surface/80">{label}</span>
                )}
              </div>
            ))}
            <ResumeButton className="mt-2 self-start" />
            <Socials className="mt-2" />
          </div>

          <form onSubmit={handleSubmit} className="card flex w-full flex-col gap-5 lg:col-span-3">
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="flex w-full flex-col gap-5 md:flex-row">
              <label className="w-full">
                <span className="sr-only">Name</span>
                <input type="text" name="name" placeholder="Name" className="input" required />
              </label>
              <label className="w-full">
                <span className="sr-only">Email</span>
                <input type="email" name="email" placeholder="Email" className="input" required />
              </label>
            </div>
            <label>
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject" className="input" required />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea name="message" placeholder="Message" className="textarea" required />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-accent focus-ring group self-start disabled:cursor-wait disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <RiLoader4Line className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <BsArrowRight className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div role="status" aria-live="polite" className="text-sm">
                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-secondary">
                    <RiCheckboxCircleLine aria-hidden="true" />
                    Thanks! Your message is on its way. I will reply within a day.
                  </p>
                )}
                {status === 'mailto' && (
                  <p className="flex items-center gap-2 text-on-surface/80">
                    <RiMailSendLine className="shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      Your email app should open with the message ready to send. Nothing opened?{' '}
                      <a href={fallbackHref} className="text-accent underline underline-offset-2">
                        Try again
                      </a>{' '}
                      or email {profile.email}.
                    </span>
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-red-500">
                    <RiErrorWarningLine className="shrink-0" aria-hidden="true" />
                    <span>
                      The message couldn&apos;t be sent right now.{' '}
                      <a href={fallbackHref} className="underline underline-offset-2">
                        Send it by email instead
                      </a>
                      .
                    </span>
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
