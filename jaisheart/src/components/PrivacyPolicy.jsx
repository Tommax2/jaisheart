import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Section = ({ number, title, children }) => (
  <section className="border-t border-white/10 pt-8">
    <div className="flex items-start gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
        {number}
      </span>
      <div className="min-w-0">
        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-secondary sm:text-base">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <section
      id="privacy-policy"
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl pt-32 sm:pt-36`}
      aria-labelledby="privacy-policy-title"
    >
      <div>
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>
        <p className={styles.sectionSubText}>Legal &amp; privacy</p>
        <h2 id="privacy-policy-title" className={styles.sectionHeadText}>
          Naija Kombat Privacy Policy
        </h2>
        <p className="mt-3 text-sm font-medium text-cyan-200">
          Last updated: July 24, 2026
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="border-b border-white/10 bg-gradient-to-r from-cyan-400/10 via-indigo-400/10 to-transparent p-6 sm:p-8">
          <p className="max-w-4xl text-[15px] leading-7 text-white/80 sm:text-base">
            This Privacy Policy describes our policies regarding the collection,
            use, and disclosure of information when you play or interact with
            Naija Kombat.
          </p>
          <p className="mt-4 max-w-4xl text-[15px] leading-7 text-white/80 sm:text-base">
            We believe in complete transparency. Naija Kombat is built as a
            standalone application. We do not operate custom backend servers,
            maintain user databases, or directly collect, store, or harvest
            personal data from our players.
          </p>
        </div>

        <div className="space-y-8 p-6 sm:p-8 lg:p-10">
          <Section number="1" title="Data Collection & Processing">
            <div>
              <h4 className="font-semibold text-white">Personal data collected directly by us</h4>
              <p className="mt-2">
                We do not ask for, collect, store, or transmit personally
                identifiable information—such as your name, email address,
                physical address, or phone number—directly through the
                application.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">In-app purchases &amp; financial data</h4>
              <p className="mt-2">
                The application offers digital content or features through
                Google Play In-App Purchasing.
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-5 marker:text-cyan-300">
                <li>
                  <span className="font-semibold text-white">Payment processing:</span>{" "}
                  Purchases are processed entirely by Google LLC through your
                  Google Play Account. We do not collect, view, or store your
                  credit card details, banking information, or billing address.
                </li>
                <li>
                  <span className="font-semibold text-white">Transaction records:</span>{" "}
                  Google provides purchase validation tokens and purchase status
                  reports so the application can verify and unlock purchased
                  items.
                </li>
              </ul>
              <p className="mt-4">
                Learn more in the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-white"
                >
                  Google Privacy Policy
                </a>
                .
              </p>
            </div>
          </Section>

          <Section number="2" title="Children’s Privacy">
            <p>
              The application does not knowingly collect personal data from
              anyone, including children under the age of 13—or 16, depending on
              the applicable jurisdiction. Because the application does not
              collect personal information, no child’s data is gathered or
              shared by us.
            </p>
          </Section>

          <Section number="3" title="Data Deletion & Account Rights">
            <p>
              Naija Kombat does not create user accounts or store personal data
              on external servers. Therefore:
            </p>
            <ul className="list-disc space-y-3 pl-5 marker:text-cyan-300">
              <li>There are no user accounts or personal profiles to delete.</li>
              <li>
                Uninstalling the application removes locally stored game save
                files and settings from your device.
              </li>
              <li>
                You can review and manage your purchase history in your Google
                Play Store Account under <span className="font-medium text-white">Payments &amp; subscriptions</span>.
              </li>
            </ul>
          </Section>

          <Section number="4" title="Third-Party Services">
            <p>
              The application uses services provided by Google Play to enable
              in-app purchases. These services may collect information used to
              identify you in accordance with their own privacy policies.
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-white"
            >
              Google Play Services Privacy Policy
              <span aria-hidden="true">↗</span>
            </a>
          </Section>

          <Section number="5" title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted by updating the “Last updated” date at the top of
              this policy.
            </p>
          </Section>

          <Section number="6" title="Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy,
              contact us by email:
            </p>
            <a
              href="mailto:jaistechworld999@gmail.com"
              className="inline-flex max-w-full items-center gap-3 break-all rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15 hover:text-white"
            >
              <span aria-hidden="true">✉</span>
              jaistechworld@gmail.com
            </a>
          </Section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
