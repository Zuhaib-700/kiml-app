import React from "react";
import { ScrollView } from "react-native";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const { theme } = useSelector((state) => state.ThemeSlice);
  const { container, title, paragraph, bold, listItem } = styles(theme);
  return (
    <ScrollView contentContainerStyle={container}>
      <Text style={title}>Overview</Text>
      <Text style={paragraph}>
        Please read the following privacy policy and personal information
        collection statement (the <Text style={bold}> “Policy”</Text>)
        carefully. It contains important information about how KIML View Ltd and
        our affiliated companies (collectively,{" "}
        <Text style={bold}>“Kimlcards,</Text> <Text style={bold}>“we,</Text>{" "}
        <Text style={bold}>“us” </Text>or <Text style={bold}>“our”</Text>)
        collect, use, handle, store, share, transfer, transmit, delete, or
        otherwise process (collectively, <Text style={bold}>“process”</Text>)
        Personal Data and other information that are collected and received
        during our operation of Kimlcards’s website(s) ({" "}
        <Text style={bold}>“Site(s)”</Text>) and services (“Services”) and
        through your use of the Site(s) or Services. Depending on the
        jurisdiction in which you are a resident, the relevant data privacy laws
        and regulations of that jurisdiction may apply.
      </Text>
      <Text style={title}>1. Our Data Privacy Principles</Text>
      <Text style={paragraph}>
        We are committed to protecting your privacy in accordance with
        applicable laws and regulations. We adhere to industry standards and
        will use our best endeavours to protect your Personal Data and other
        information provided by you in our possession or control from
        unauthorised and/or accidental processing, access, modification,
        disclosure, destruction, loss or other use by adopting reasonable
        security measures.
      </Text>
      <Text style={paragraph}>
        This Policy sets out our data protection standard and measures in
        relation to providing adequate protection for your Personal Data and
        your rights concerning the processing of such information. We shall only
        process your Personal Data and such other information provided by you in
        accordance with this Policy and any applicable laws and regulations of
        any relevant jurisdiction.
      </Text>
      <Text style={paragraph}>
        In the unlikely event of a data breach pertaining to the unauthorised
        processing of Personal Data or such other information provided by you
        that is in our possession or control, we will duly submit a data breach
        notification to the relevant authority(ies) if required by relevant and
        applicable laws and regulations.
      </Text>
      <Text style={title}>2. Data Types and Data Collection</Text>
      <Text style={paragraph}>
        We will by lawful means collect, and you will provide, information that
        is necessary for your use of the Site(s) or Services:
      </Text>
      <Text style={paragraph}>
        <Text style={bold}>Personal Data</Text> means any information, whether
        on its own or when combined with other information, directly or
        indirectly relating to an individual and his/her business from which it
        is practicable for his/her identity to be directly or indirectly
        ascertained, or such other wider definition as may be prescribed by any
        applicable law or regulation of any relevant jurisdiction. This includes
        information about an individual that is personally identifiable, such as
        his/her personal information and contact information that is not
        otherwise publicly available. When you register with us and use the Site
        or Services, Kimlcards collects your Personal Data, including but not
        limited to your name, email address, mailing address, phone number, HKID
        number (to the extent permissible under applicable laws and
        regulations), date of birth (solely for identity verification purposes),
        as well as and business information, including but not limited to
        business/company name, business/company address, business registration
        number, credit card number(s) and billing information. For the avoidance
        of doubt, business information is not considered Personal Data provided
        that it is used for business-to-business transactions. We tokenise your
        credit card number(s) and your billing information for secure storage
        and we only store tokenised information. Once you register an account
        with Kimlcards, we will associate your identity with your Kimlcards
        account ( <Text style={bold}>“Account”</Text>). We do not seek to
        collect sensitive information about you, unless it is necessary for our
        business purposes and the purposes stated in this Policy and collected
        in accordance with the relevant laws or regulations or otherwise
        required by law or relevant authorities. Sensitive information we may
        collect includes your political or trade union membership or
        associations, criminal record, and biometric information.
      </Text>
      <Text style={paragraph}>
        <Text style={bold}>Transaction Data </Text>means any information about
        your transactions with or through us. We automatically receive and
        record such information on our server logs from your browser, including
        your IP address, Kimlcards cookie information, and the page you
        requested
      </Text>
      <Text style={paragraph}>
        <Text style={bold}>Third-Party Data</Text> means any information
        relating to your payment recipient ({" "}
        <Text style={bold}>“Recipient”</Text>) that may be required by Kimlcards
        to process your payments or transactions and/or to comply with
        regulations and perform compliance or verification checks. Such
        information may include Personal Data of the Recipient or third parties,
        such as the Recipients’ name, bank account number, and a copy of your
        contract, invoice or receipt with the Recipient. By providing us with
        such information, you warrant that you have obtained the consent of the
        Recipient or third party to the provision of such information to
        Kimlcards, and to Kimlcards’s processing such information for the
        above-stated purposes. You hereby warrant that such information provided
        to us is accurate to the best of your knowledge and that you will comply
        with all applicable laws and regulations (including applicable data
        privacy and confidentiality laws) in relation to the processing of such
        information.
      </Text>
      <Text style={title}>3. Use of Data and Information</Text>
      <Text style={paragraph}>
        We may and will only process your Personal Data and such other
        information provided by you, whether within or outside of your
        jurisdiction, for one or more of the following stated purposes and any
        other purposes permitted by you or as permitted by applicable laws and
        regulations:
      </Text>
      <Text style={listItem}>
        - to consider and/or process your application/transactions with us or
        your transactions or communications with third parties via the Services;
      </Text>
      <Text style={listItem}>
        - to manage, operate, provide and/or administer your use of and/or
        access to our Site(s) and/or Services, as well as your relationship and
        Account with us;
      </Text>
      <Text style={listItem}>
        - to tailor your experience through the Services by displaying content
        according to your interests and preferences, providing a faster method
        for you to access your Account and submit information to us and allowing
        us to contact you if necessary;
      </Text>
      <Text style={listItem}>
        - to respond to, process, deal with or complete a transaction and/or to
        fulfil your requests for certain products and services and notify you of
        service issues and unusual Account activities;
      </Text>
      <Text style={listItem}>
        - to enforce our Services Agreement or any applicable end user licence
        agreements;
      </Text>
      <Text style={listItem}>
        - to protect the rights, property or safety of you and other users of
        our Site(s) and/or Services;
      </Text>
      <Text style={listItem}>
        - for identification and/or identity verification of you and your
        Recipient;
      </Text>
      <Text style={listItem}>
        - to maintain and administer any software updates and/or other updates
        and support that may be required from time to time to ensure the smooth
        running of our Services;
      </Text>
      <Text style={listItem}>
        - to deal with or facilitate customer service, carry out your
        instructions, deal with or respond to any enquiries given by, or
        purported to be given by, you or on your behalf;
      </Text>
      <Text style={listItem}>
        - to contact you or communicate with you via voice call, text message,
        email and/or postal mail or otherwise;
      </Text>
      <Text style={listItem}>
        - to conduct research, analysis and development activities (including,
        but not limited to, data analytics, surveys, product and service
        development, and/or profiling), analyse how you use our Site(s) and/or
        Services, improve our Site(s), Services or products, and/or to enhance
        your customer experience;
      </Text>
      <Text style={listItem}>
        - to allow for audits and surveys to, among other things, validate the
        size and composition of our target audience and understand their
        experience;
      </Text>
      <Text style={listItem}>
        - only where you give us your prior consent, to send you direct
        marketing material (please see details below);
      </Text>
      <Text style={listItem}>
        - to respond to legal processes or to comply with or as required by any
        applicable laws, governmental or regulatory requirements of any relevant
        jurisdiction, including, without limitation, meeting the requirements to
        make disclosure under the requirements of any law binding on us;
      </Text>
      <Text style={listItem}>
        - to produce statistics and research for internal and statutory
        reporting requirements and/or to meet record-keeping requirements;
      </Text>
      <Text style={listItem}>
        - to carry out due diligence or other screening activities (including,
        without limitation, background checks) in accordance with legal or
        regulatory obligations or our risk management policies that may be
        required by law or that may have been put in place by us;
      </Text>
      <Text style={listItem}>
        - to prevent or investigate any fraud, unlawful activity, omission or
        misconduct, whether relating to your use of our Site(s) and/or Services
        or any other matter arising from your relationship with us, and whether
        or not there is any suspicion of the aforementioned;
      </Text>
      <Text style={listItem}>- or disaster recovery or otherwise;</Text>
      <Text style={listItem}>
        - any other purposes which we notify you in writing of at the time of
        obtaining your consent.
      </Text>

      <Text style={title}>4. Data Transfer and Disclosure</Text>
      <Text style={paragraph}>
        We do not rent, sell, transfer, or disclose your Personal Data or such
        other information provided by you with non-affiliated companies or other
        parties. Notwithstanding the preceding, under the following
        circumstances and to the extent permissible under applicable laws and
        regulations of the relevant jurisdiction(s), we may, with your consent,
        share your personal data or such other information provided by you:
      </Text>
      <Text style={listItem}>
        - With our third-party service providers or data centres of third-party
        data storage providers, whether in or out of jurisdiction and who have
        entered into appropriate confidentiality arrangements with us, for
        background check, customer screening and identity verification and
        customer care services to provide the Site(s) and/or Services you have
        requested;
      </Text>
      <Text style={listItem}>
        - With our employees on a need-to-know basis to provide the Site(s)
        and/or Services to you or to fulfil their duties;
      </Text>
      <Text style={listItem}>
        - With third parties, who have entered into appropriate confidentiality
        arrangements with us, where it is necessary to satisfy the purposes as
        stated in this Policy, or any person, entity, or authority to whom we
        are under an obligation to make disclosure in accordance with any
        applicable laws, regulations, or regulatory or accounting requirements;
      </Text>
      <Text style={listItem}>
        - When it is necessary to share information in order to investigate,
        prevent, or take action regarding illegal activities, suspected fraud,
        situations involving potential threats to the physical safety of any
        person, or violations of Kimlcards’s terms of use;
      </Text>
      <Text style={listItem}>
        - With prospective parties and their advisers and new owners of the
        business for due diligence purpose when Kimlcards or any subsequent
        future successor company is acquired by or merged with another company;
      </Text>
      <Text style={listItem}>
        - When required by law or relevant regulatory authorities to make any
        disclosures of any breach of the security, confidentiality, or integrity
        of your unencrypted electronically stored Personal Data (or “personal
        data” otherwise defined in applicable law) to you via email or
        conspicuous posting on the Site in the most expedient time possible and
        without unreasonable delay, insofar as consistent with the legitimate
        needs of law enforcement or any measures necessary to determine the
        scope of the breach and restore the reasonable integrity of the data
        system.
      </Text>
      <Text style={paragraph}>
        We may share statistical and demographic information about you and your
        transactions with suppliers of advertisements and programming. For the
        avoidance of doubt, this would not include your Personal Data. For each
        payment made through our Services, the Recipient may request your
        information solely for the purpose of identifying your payment and its
        origins.
      </Text>
      <Text style={paragraph}>
        Notwithstanding and without prejudice to the above, Kimlcards is
        equipped with standard encrypted Secure Sockets Layer (SSL) Certificate
        and your payment card details are not stored by Kimlcards but instead
        managed in a Payment Card Industry Data Security Standard (PCI DSS)
        compliant network.
      </Text>

      <Text style={title}>5. Direct Marketing</Text>

      <Text style={paragraph}>
        With your consent, we may use your name, phone number, email address,
        mailing address, your preferred language of communication, and your
        birthday month information ( <Text style={bold}>“Marketing Data”</Text>)
        to provide you with marketing information, including information about
        products, services and events of Kimlcards, our affiliates, and our
        third-party business partners which are in the business of financial and
        technology services, money services and money lending (
        <Text style={bold}>“Kimlcards Business Partners”</Text>). These products
        and services include financial services, money services, money lending,
        and technology services ( <Text style={bold}>“Marketing Subjects”</Text>
        ). Our affiliates and Kimlcards Business Partners may also use Marketing
        Data to provide you with information about their Marketing Subjects. We
        may receive compensation in sharing your Marketing Data with our
        affiliates and Kimlcards Business Partners. You may opt out of direct
        marketing at any time, and we will stop sending you such information and
        providing your personal data to our affiliates and Kimlcards Business
        Partners, and will notify our affiliates and Kimlcards Business Partners
        to whom your personal data has been so provided to stop using your
        personal data in direct marketing. Please note that the system may take
        some time to process your request and you may still receive marketing
        information in the interim.
      </Text>

      <Text style={paragraph}>
        If your Marketing Data is used in any direct marketing communications,
        you have the right to request that we provide you with the source of
        that Marketing Data. There is no fee for requesting this information. We
        will provide you with the source of personal data unless it is
        impracticable or unreasonable to do so.
      </Text>

      <Text style={title}>
        6. Cookies and Information Collected by Third Parties
      </Text>
      <Text style={[paragraph, bold]}>Use of Cookies</Text>

      <Text style={paragraph}>
        We use cookies to collect information when you use our Site(s) or
        Services. A cookie is a small data file that we transfer to your device
        or computer’s hard disk for record-keeping purposes in relation to your
        use of our Site(s) to improve your Site experience. Allowing cookies
        does not give us or any other site access to the rest of your device or
        computer. We utilise persistent cookies to save your login information
        for future logins to the Site(s) and Account. We utilise session ID
        cookies to gather information in relation to your usage patterns on the
        Site(s) to enable certain features of the Site(s) and Account to better
        understand how you interact with the Site(s) and Account and to monitor
        aggregate usage by you and web traffic routing on the Site(s). Contrary
        to persistent cookies, session ID cookies are deleted from your device
        or computer when you log off from the Site(s), Account and Services and
        then close your browser. Information collected by cookies is separate
        from and is not linked to your Personal Data.
      </Text>
      <Text style={[paragraph, bold]}>
        Third-party Cookies and “Remarketing” or “Retargeting”
      </Text>

      <Text style={paragraph}>
        Third-party advertisers on the Site(s) and Account may also place or
        read cookies on your browser in order to provide you with targeted
        advertising which is more relevant to you and your interests. After you
        have visited the Site(s) and/or Account, you may see Kimlcards’s
        advertisements on certain participating third-party websites.
      </Text>
      <Text style={paragraph}>
        Furthermore, Kimlcards uses third party cookies technology, including
        but not limited to Google Analytics, a web analytics service provided by
        Google, Inc. (“Google”). Google Analytics uses cookies to help Kimlcards
        analyse how you use the Site(). The information generated by the cookie
        about your use of the Site(s) (including your IP address) will be
        transmitted to and stored by Google on its servers. Google will use this
        information for the purpose of evaluating your use of the Site(s),
        compiling reports on website activity for website operators and
        providing other services relating to website activity and Internet
        usage. Google may also transfer this information to third parties where
        required to do so by law, or where such third parties process the
        information on Google’s behalf. Google will not associate your IP
        address with any other data held by Google.
      </Text>
      <Text style={[paragraph, bold]}>
        Other information collected by third parties
      </Text>

      <Text style={paragraph}>
        In your use of our Site(s) and/or Services, third parties may also
        collect your Personal Data. For example, when you make payments on our
        Site, you may be directed to the web pages of a third-party payment
        gateway services provider which will collect your Personal Data.
      </Text>
      <Text style={paragraph}>
        We, and third parties, may from time to time make software applications
        downloads available for your use on or through the Services. These
        applications may separately access, and allow a third party to view,
        your Personal Data, your computer’s IP address or other information such
        as any cookies that you may previously have installed or that were
        installed for you by a third-party software application or website.
        Additionally, these applications may ask you to provide additional
        information directly to third parties. Third-party products or services
        provided through these applications are not owned or controlled by
        Kimlcards.
      </Text>
      <Text style={paragraph}>
        You are encouraged to read the terms and other policies published by
        such third parties on their websites or otherwise. We have no control
        over and shall not be responsible for any third party’s processing of
        your Personal Data.
      </Text>
      <Text style={[paragraph, bold]}>Cookie Settings</Text>

      <Text style={paragraph}>
        By changing browser settings, you may disable cookies or instruct the
        browser to prompt you before accepting a cookie. If you accept cookies
        during your use of the Site(s), Account or Services, you acknowledge
        that your information is being processed as described above. However, by
        disabling or not accepting cookies, you may not be able to enjoy full
        services and features of the Site(s) or all functionality of the
        Services.If your Marketing Data is used in any direct marketing
        communications, you have the right to request that we provide you with
        the source of that Marketing Data. There is no fee for requesting this
        information. We will provide you with the source of personal data unless
        it is impracticable or unreasonable to do so.
      </Text>

      <Text style={title}>7. Data Retention</Text>
      <Text style={paragraph}>
        We will retain your Personal Data and any such other information
        provided by you for as long as is necessary for providing the Site(s) or
        Services to you subject to any legal, regulatory or accounting
        requirements, after which it will be erased or destroyed permanently
        using all practicable steps.
      </Text>
      <Text style={paragraph}>
        Unless you have expressly opted out of communications and deactivated or
        terminated your Account and removed payment details therein, you
        acknowledge that your Personal Data, payment history, username and
        password may remain in our system including for the purpose of legal
        compliance. If your Account is not used for more than 5 years, we will
        keep your Account alive and may retain non-personal information, but we
        will erase your other Personal Data.
      </Text>

      <Text style={title}>‍8. Right to Access and Update Your Information</Text>
      <Text style={paragraph}>
        You have the right to request information about the nature of your
        Personal Data that is processed by us or in our possession or control
        and how your Personal Data collected by us is processed.
      </Text>
      <Text style={paragraph}>
        You have the right to request access to and correction of your Personal
        Data in our possession or control and the right to opt out of direct
        marketing. If any Personal Data that you have provided changed, for
        example if you change your name, email address, or payment details,
        please inform us by editing your Account profile page or by sending an
        email to our data officer at support@kimlcards.com. You may ask us, or
        we may ask you, to correct information that is deemed inaccurate, and
        you may also ask us to remove information which is inaccurate.
      </Text>
      <Text style={paragraph}>
        If you would like to make such requests, please send an email to our
        data officer at support@kimlcards.com.
      </Text>
      <Text style={title}>9. General</Text>

      <Text style={paragraph}>
        By using our Site(s) or Services and by providing or making available
        your Personal Data and such other information as described above to us,
        you acknowledge that such provision is fair and reasonable and you
        consent to the processing, sharing or disclosure of your Personal Data
        and/or such other information by us for the purposes of providing the
        Site(s) or Services to you, improving our Site and features, contacting
        you, conducting research, and such other purposes as stated in this
        Policy. Your consent means that Kimlcards will not be held accountable
        for any data breach not due to its default. You may withdraw your
        consent by written notice at support@kimlcards.com. Please note that it
        is mandatory to provide certain Personal Data or such other information
        to us, otherwise you may not be able to register for an Account and
        continuously and fully use the Site(s) or Services.
      </Text>
      <Text style={paragraph}>
        By providing your email address associated with your Account, selecting
        the check box on the registration page or subscribing to our email list
        via your Account profile page, you consent to us sending emails to you
        relating to the Services, including transactional and product updates.
        You may withdraw your consent to receive electronic marketing
        communications at any time by opting out on your Profile page, emailing
        us at support@kimlcards.com, or following the unsubscribe procedure
        contained in any electronic communication you receive from us. Kimlcards
        reserves the right to send users that have provided an email address
        updates that are transactional in nature including, but not limited to
        payment receipts, updates such as administrative messages, password
        reset notifications, and other Account related information.
      </Text>
      <Text style={title}>10. Changes to Our Privacy Polic</Text>
      <Text style={paragraph}>
        This Policy may be revised or updated from time to time and you are
        advised to check this Policy periodically. We will notify you of
        significant changes to this Policy through direct email to the address
        associated with your Account, or a notification prominently displayed on
        our Site. (<Text style={bold}> Version: July 2024</Text>)
      </Text>
      {/* <Text style={[paragraph, bold]}>Use of Cookies</Text> */}
    </ScrollView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.backgroundColor,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "Arial",
      marginBottom: 8,
      color: theme.contrastText,
    },
    paragraph: {
      fontSize: 10,
      fontFamily: "Arial",
      marginTop: 14,
      color: theme.contrastText,
    },
    bold: {
      fontWeight: "bold",
    },
    listItem: {
      fontSize: 10,
      fontFamily: "Arial",
      marginLeft: 20,
      marginTop: 5,
      color: theme.contrastText,
    },
  });

export default PrivacyPolicy;
