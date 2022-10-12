/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from '@mui/material';

// Component
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';

const LegalContainer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Box sx={{ borderTop: 1, borderColor: 'primary.main', my: 2, pt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Introduction
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          Protecting your private information is our priority. This Statement of
          Privacy applies to the Site and AirJourni LLC and governs data
          collection and usage. For the purposes of this Privacy Policy, unless
          otherwise noted, all references to AirJourni include the Site and
          AirJourni LLC. The AirJourni website is a travel planning site. By
          using the AirJourni website, you consent to the data practices
          described in this statement.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Collection of your Personal Information
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          If you choose to use AirJourni's products and services, we collect the
          data provided to us from your social media provider. This information
          is used to provide an experience on AirJourni. AirJourni encourages
          you to review the privacy statements of websites you choose to link to
          from AirJourni so that you can understand how those websites collect,
          use and share your information. AirJourni is not responsible for the
          privacy statements or other content on websites outside of the
          AirJourni website.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Use of your Personal Information
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          AirJourni collects and uses your personal information to operate its
          website(s) and deliver the services you have requested. AirJourni may
          also use your personally identifiable information to inform you of
          other products or services available from AirJourni. AirJourni may
          also contact you via surveys to conduct research about your opinion of
          current services or of potential new services that may be offered.
          AirJourni does not sell, rent or lease its customer lists to third
          parties. AirJourni may share data with trusted parties to help perform
          statistical analysis, send you email or postal mail, provide customer
          support, or arrange for deliveries. All such third parties are
          prohibited from using your personal information except to provide
          these services to AirJourni, and they are required to maintain the
          confidentiality of your information. AirJourni will disclose your
          personal information, without notice, only if required to do so by law
          or in the good faith belief that such action is necessary to: (a)
          conform to the edicts of the law or comply with legal process served
          on AirJourni; (b) protect and defend the rights or property of
          AirJourni; and, (c) act under exigent circumstances to protect the
          personal safety of users of AirJourni, or the public.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Automatically Collected Information
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          Information about your computer hardware and software may be
          automatically collected by AirJourni. This information can include:
          your IP address, browser type, domain names, access times and
          referring website addresses. This information is used for the
          operation of the service, to maintain quality of the service, and to
          provide general statistics regarding use of the AirJourni website.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          What are Cookies?
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          A cookie is a small text file that is placed on your hard disk by a
          web page server to uniquely identify your browser or to store
          information in your browser. Cookies cannot be used to run programs or
          deliver viruses to your computer. A “web beacon” links web pages to
          servers and may be used to transmit information collected through
          cookies back to a web server. Most cookies expire after a certain
          period of time depending on what they are used for. AirJourni uses
          both first-party cookies (which are set by our website when it is
          being visited) and third-party cookies (which are set by a server
          located outside the domain of our website). If you would like to learn
          more about this practice and to know your choices about not having
          this information collected and shared with third parties, visit
          http://networkadvertising.org/ or review our "Managing your Cookies"
          section further below.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Types of Cookies we use
        </Typography>
        <ul>
          <li>
            <h3>Essential Cookies</h3>
            <Typography variant="body1" color={'text.secondary'} gutterBottom>
              Certain cookies are necessary in order for AirJourni's website to
              operate properly. For example, we use cookies to authenticate you.
              When you log on to our platform, authentication cookies are set
              which let us know who you are during a browsing session. These
              cookies also facilitate the social media login functionality
              (e.g., via Apple, Facebook, Google, or Twitter) on our website.
              Essential cookies do not include advertising cookies, which are
              discussed further below.
            </Typography>
          </li>
          <li>
            <h3>Analytics Cookies</h3>
            <Typography variant="body1" color={'text.secondary'} gutterBottom>
              Certain cookies are necessary in order for AirJourni's website to
              operate properly. For example, we use cookies to authenticate you.
              When you log on to our platform, authentication cookies are set
              which let us know who you are during a browsing session. These
              cookies also facilitate the social media login functionality
              (e.g., via Google, GitHub, Facebook, or LinkedIn) on our website.
              Essential cookies do not include advertising cookies, which are
              discussed further below.
            </Typography>
          </li>
          <li>
            <h3>Personalization/Customization Cookies</h3>
            <Typography variant="body1" color={'text.secondary'} gutterBottom>
              In some cases, we use cookies to remember the choices you make
              while browsing the AirJourni website and to store your preferences
              for you. When you return to the same AirJourni website, the
              information you previously provided can be retrieved, so you can
              easily use the AirJourni features that you customized. This
              functionality improves user experience and allows us to customize
              your site experience accordingly.
            </Typography>
          </li>
          <li>
            <h3>Analytics Cookies</h3>
            <Typography variant="body1" color={'text.secondary'} gutterBottom>
              Through our service providers, we may use analytics to collect
              information about your use of the AirJourni website to create
              reports and statistics on the performance of the website.
              Analytics collect information such as your IP address, type of
              device, operating system, geolocation, referring URLs, time and
              date of page visits, and which pages you visit. The information
              allows us to quantify our audience size, see the overall patterns
              of usage on the platform, help us record any difficulties you have
              with the website, and show us whether our advertising is effective
              or not.
            </Typography>
          </li>
        </ul>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Managing your Cookies
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          You have the ability to accept or decline cookies. Most desktop web
          browsers automatically accept cookies, but you can usually modify your
          browser settings to decline cookies if you prefer. You'll want to
          refer to your browser's help section to do this since the instructions
          are usually browser-specific. Mobile devices typically allow you to
          control cookies through their system settings. Refer to your device
          manufacturer’s instructions for more information on how to do this. If
          you choose to decline cookies, you may not be able to fully experience
          the interactive features of the AirJourni services.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Security of your Personal Information
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          AirJourni secures your personal information from unauthorized access,
          use, or disclosure. AirJourni uses the SSL Protocol for this purpose:
          When personal information (such as a credit card number) is
          transmitted to other websites, it is protected through the use of
          encryption - the Secure Sockets Layer (SSL) protocol.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Children under Thirteen
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          AirJourni does not knowingly collect personally identifiable
          information from children under the age of thirteen.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Changes to this Statement
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          AirJourni will occasionally update this Statement of Privacy to
          reflect company and customer feedback. AirJourni encourages you to
          periodically review this Statement to be informed of how AirJourni is
          protecting your information.
        </Typography>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          Contact Information
        </Typography>
        <Typography variant="body1" color={'text.secondary'} gutterBottom>
          AirJourni welcomes your questions or comments regarding this Statement
          of Privacy. If you believe that AirJourni has not adhered to this
          Statement, please contact AirJourni’s team by sending a message
          through the website.
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
};

export default LegalContainer;
