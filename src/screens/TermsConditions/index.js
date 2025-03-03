import React from "react";
import { ScrollView } from "react-native";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const TermsOfUse = () => {
  const { theme } = useSelector((state) => state.ThemeSlice);
  const { container, title, paragraph, bold, listItem } = styles(theme);
  return (
    <ScrollView contentContainerStyle={container}>
      <Text style={title}>General Terms of Use</Text>
      <Text style={paragraph}>Hi and welcome to Kimlcards!</Text>
      <Text style={paragraph}>
        These General Terms of Use contain general information that apply to
        your use of Kimlcards’s products and services, and your use as a visitor
        to kimlcards.com (<Text style={bold}>Kimlcards Website</Text>). You are
        encouraged to read these Terms of Use carefully. If you have any
        questions about this General Terms of Use, please contact our customer
        support.
      </Text>
      <Text style={paragraph}>
        Depending on the country where we are incorporated, and with which your
        account is registered and the Kimlcards products and services you wish
        to subscribe, the terms (<Text style={bold}>Kimlcards</Text>,
        <Text style={bold}> we</Text>, <Text style={bold}>us</Text>, and{" "}
        <Text style={bold}>our</Text>) shall mean or relate to KIML View Ltd
        and/or its affiliates (referred together herein as{" "}
        <Text style={bold}>Kimlcards</Text>).
      </Text>
      <Text style={paragraph}>
        Kimlcards owns the Kimlcards Website or any content made available on
        the Kimlcards Website. By accessing and using Kimlcards’s products and
        services and the Kimlcards Website, you confirm that you have read,
        understood and accept these General Terms of Use and that you agree to
        comply with them. If you do not agree to any of the terms of these
        General Terms of Use, you must not or stop using any Kimlcards’s
        products and services.
      </Text>
      <Text style={title}>Other applicable terms</Text>
      <Text style={paragraph}>
        These General Terms of Use shall be supplemented by the Kimlcards’s
        Privacy Policy, which sets out information about the cookies on
        Kimlcards Website and the terms with which Kimlcards may process any
        personal data collected from you or that you provided to us. By
        accessing and using Kimlcards Website, you consent to such processing
        and you warrant that all data provided by you is accurate.
      </Text>{" "}
      <Text style={paragraph}>
        These General Terms of Use shall also be supplemented by any other
        applicable terms that are specific to Kimlcards’s products and services,
        and shall collectively govern your access and use of the Kimlcards’s
        products and services and the Kimlcards Website.
      </Text>{" "}
      <Text style={title}>
        Changes to these Terms of Use and Kimlcards Website
      </Text>
      <Text style={paragraph}>
        We reserve the right to supplement, vary, amend or update any of the
        terms of these General Terms of Use or any other applicable terms and
        the Kimlcards Website from time to time. While we endeavour to notify
        you of any such supplement, variation, amendment or update by posting on
        the Kimlcards Website or following such other delivery method as
        reasonably determined by Kimlcards, we are under no obligation to
        provide any prior notice.
      </Text>{" "}
      <Text style={paragraph}>
        It is ultimately your responsibility to check the Kimlcards Website from
        time to time to take notice of any changes Kimlcards makes, as they are
        legally binding on you. If you do not raise any opposition to any
        proposed supplement, variation or amendment and continue to access and
        use Kimlcards’s products and services, you shall be deemed to have read,
        understood and agreed to the changes or updates made.
      </Text>{" "}
      <Text style={title}>Notices and communication</Text>
      <Text style={paragraph}>
        You may refer to our Support page available on the Kimlcards Website for
        any general support issues or you can contact us via our email or online
        chat. Contact details can be found on the Kimlcards Website.
      </Text>
      <Text style={paragraph}>
        It is your responsibility to ensure that you are able to receive the
        emails and communications we send you. You consent to accept any
        notices, emails or communications electronically and understand that we
        may send notices to you directly through the Kimlcards’s dashboard
        provided to you or to the email addresses or phone numbers you provided
        to us.
      </Text>{" "}
      <Text style={title}>Accessing Kimlcards Website</Text>
      <Text style={paragraph}>
        We do not guarantee that the Kimlcards Website, or any content on it,
        will always be available or be uninterrupted. Any content published on
        the Kimlcards Website may be out of date at any given time and we do not
        guarantee that the Kimlcards Website, or any content on it, will be free
        from any errors or omissions.
      </Text>
      <Text style={paragraph}>
        We may suspend, withdraw, discontinue or change all or any part of the
        Kimlcards Website or its products or services without notice. Kimlcards
        will not be liable to you if for any reason the Kimlcards Website or
        Kimlcards’s products and services are unavailable at any time or for any
        period. You are responsible for making all arrangements necessary for
        you to have access to the Kimlcards Website. You are also responsible
        for ensuring that all persons who access the Kimlcards Website through
        your internet connection are aware of these General Terms of Use and any
        other applicable terms and conditions that Kimlcards may have specific
        to its products and services and that they comply with them.
      </Text>{" "}
      <Text style={title}>Account management and password</Text>
      <Text style={paragraph}>
        Where a user identification code, email, password or other pieces of
        information is required in order to use the Kimlcards Website or
        Kimlcards’s products and service, such information is kept confidential
        by Kimlcards. Kimlcards has the right to disable any user identification
        code, email or password if, in Kimlcards’s reasonable opinion, you have
        failed to comply with any of the provisions of the terms and conditions.
      </Text>
      <Text style={paragraph}>
        If you know or suspect that anyone other than you or your authorised
        personnel knows your user identification code, email or password, you
        must promptly notify us at support@kimlcards.com.
      </Text>{" "}
      <Text style={title}>
        Know-Your-Customer & Anti-Money Laundering procedures
      </Text>
      <Text style={paragraph}>
        We may, at our sole discretion or as otherwise required by law, conduct
        appropriate Know-Your-Customer (KYC) and/or Anti-Money Laundering (AML)
        procedures, for which you will need to register in full and provide us
        with specified documents to prove and establish your identity.
      </Text>
      <Text style={paragraph}>
        During registration, you may need to provide, including but not limited
        to, your full name and/or the full legal name of the entity that you
        represent or acting on behalf of, whenever applicable, residential
        address or incorporation/business address, date of birth or date of
        incorporation, nationality, contact number, and email address.
      </Text>
      <Text style={paragraph}>
        The KYC documentation that we may request may include, but not limited
        to the following:
      </Text>
      <Text style={listItem}>
        - Proof of identity or incorporation, including any relevant business
        registration documents, annual returns etc.;
      </Text>
      <Text style={listItem}>
        - Proof of address/financial documents, such as bank statements;
      </Text>
      <Text style={listItem}>
        - Articles of Association & shareholding chart (if applicable);
      </Text>
      <Text style={listItem}>
        - Proof of source of funds or wealth (if applicable), for example
        investment statements or payslips.{" "}
      </Text>{" "}
      <Text style={paragraph}>
        We may suspend, terminate or reject your account or the business
        relationship until a satisfactory identification document or documentary
        evidence on the source of funds or wealth is provided. If any of your
        KYC documentation expires or is no longer valid, we have the right to
        request an additional valid and non-expired KYC documentation from you.{" "}
      </Text>
      <Text style={paragraph}>
        You agree to allow your information (individual or corporate) to be
        disclosed to Kimlcards’s service providers for the purposes of KYC
        verification and any other screening checks. You further agree,
        represent and warrant that by providing us your information, including
        information on any related or connected parties, you undertake that the
        disclosure of any personal data to Kimlcards is for our purpose and is
        within the scope of consent given to you by such related or connected
        parties.
      </Text>{" "}
      <Text style={title}>Legitimate use</Text>
      <Text style={paragraph}>
        You agree to use the Kimlcards Website and Kimlcards’s products and
        services only for legitimate purposes. You may not use the Kimlcards
        Website
      </Text>{" "}
      <Text style={listItem}>
        - In any way that breaches any applicable local or international law or
        regulation
      </Text>
      <Text style={listItem}>
        - In any way that is unlawful or fraudulent, or has any unlawful or
        fraudulent purpose or effect;
      </Text>
      <Text style={listItem}>
        - To send, knowingly receive, upload, download, use or re-use any
        material which does not comply with our content standards;
      </Text>
      <Text style={listItem}>
        - To transmit, or procure the sending of, any unsolicited or
        unauthorised advertising or promotional material or any other form of
        similar solicitation (spam);
      </Text>
      <Text style={listItem}>
        - To generate and/or cause congestion to our network traffic in excess
        of reasonable and normal usage;
      </Text>
      <Text style={listItem}>
        - To knowingly transmit any data, send or upload any material that
        contains viruses, Trojan horses, worms, time-bombs, keystroke loggers,
        spyware, adware or any other harmful programs or similar computer code
        designed to adversely affect the operation of any computer software or
        hardware
      </Text>
      <Text style={listItem}>
        - To interfere with, damage (or attempt to interfere with or damage) or
        reverse-engineer any code, data or software on or associated with the
        Kimlcards Website.
      </Text>{" "}
      <Text style={title}>Representations and warranties</Text>
      <Text style={paragraph}>
        You represent and warrant that you will not use Kimlcards for the
        purpose of money laundering, or to facilitate any illegal transactions
        or to permit others to use Kimlcards for personal, family or household
        purposes.
      </Text>{" "}
      <Text style={paragraph}>
        You further represent and warrant that you will not use Kimlcards to
        enable any person, including you, to benefit from any activities
        Kimlcards has identified as a restricted business activity or any
        activity that we may inform you as a restricted business or activity.
        This includes, but not limited to:
      </Text>{" "}
      <Text style={listItem}>
        - Use of any Kimlcards’s products and services in or for the benefit of
        a country, organization, entity, or person embargoed or blocked by any
        government, including those on sanctions lists identified by OFAC or any
        other applicable regulatory authorities;
      </Text>{" "}
      <Text style={listItem}>
        - Access or attempt to access non-public Kimlcards’s systems, programs,
        data, or services without authorisation;
      </Text>{" "}
      <Text style={listItem}>
        - Copy, reproduce, republish, upload, post, transmit, resell, or
        distribute in any way, any data, content, or any part of the Kimlcards’s
        products and services and Kimlcards Website, including any API
        documentations that may be circulated to you;
      </Text>{" "}
      <Text style={listItem}>
        - Act as service bureau or pass-through agent of any kind with no added
        value to end-users and customers;
      </Text>{" "}
      <Text style={listItem}>
        - Transfer any rights granted to you under these General Terms of Use
        and any other applicable terms specific to Kimlcards’s products and
        services to any third-parties
      </Text>{" "}
      <Text style={listItem}>
        - Work around any of the technical limitations of the Kimlcards’s
        products or services, including any of its own proprietary platform or
        enable any functionality that is disabled or prohibited
      </Text>{" "}
      <Text style={listItem}>
        - Intentionally impose any unreasonable or disproportionately large load
        on Kimlcards’s products or services, including on Kimlcards’s
        proprietary platform; or
      </Text>{" "}
      <Text style={listItem}>
        - Any other activity that Kimlcards deems as restricted business or
        activity, from time to time.
      </Text>{" "}
      <Text style={title}>Intellectual property rights</Text>
      <Text style={paragraph}>
        The content available on the Kimlcards Website may not be reproduced,
        transmitted, published, performed, broadcast, stored, adapted,
        distributed, displayed, licensed, altered, hyperlinked or otherwise used
        in whole or in part in any manner without the prior written consent of
        Kimlcards. You may not, without the prior written consent of Kimlcards,
        insert a hyperlink to the Kimlcards Website (or any part thereof) on any
        other platform or “mirror” or frame any content available on the
        Kimlcards Website on any other server or platform.{" "}
      </Text>{" "}
      <Text style={paragraph}>
        All trade marks, service marks and logos used on the Kimlcards Website
        are the property of Kimlcards and/or the respective third party
        proprietors identified on the Kimlcards Website. No licence or right is
        granted and your access to the Kimlcards Website and/or use of the
        services available thereon should not be construed as granting, by
        implication, estoppel or otherwise, any license or right to use any
        trade marks, service marks or logos appearing on the Kimlcards Website
        without the prior written consent of Kimlcards or the relevant third
        party proprietor thereof.
      </Text>
      <Text style={title}>No reliance on information and disclaimer</Text>
      <Text style={paragraph}>
        The content on the Kimlcards Website is provided for general information
        only. You are encouraged to seek any professional advice before taking,
        or refraining from, any action on the basis of the content on the
        Kimlcards Website
      </Text>
      <Text style={paragraph}>
        We make no express or implied representations or warranties regarding
        any Kimlcards’s products or services available on the Kimlcards Website,
        including warranties of merchantability, suitability or fitness for a
        particular purpose, title to, non-infringement of any technology or
        intellectual property we provide, and any warranties arising from course
        of dealing, course of performance or trade usage. We specifically
        disclaim all representations and warranties that any Kimlcards’s
        products and services, or the services any third party provides in
        connection with these General Terms of Use or any other applicable
        terms, will be error-free or uninterrupted, or that they will be
        compatible with, or operate in, any computer operating system, network
        or system configuration, or any other environment.
      </Text>{" "}
      <Text style={title}>Breach</Text>{" "}
      <Text style={paragraph}>
        Kimlcards will determine, at Kimlcards’s discretion, whether there has
        been a breach of these General Terms of Use and/or any other applicable
        terms through your use of the Kimlcards Website and Kimlcards’s products
        and services. When a breach has occurred, Kimlcards may take such action
        as Kimlcards deems appropriate. Failure to constitute a material breach
        of these General Terms of Use and any other applicable terms upon which
        you are permitted to use the Kimlcards Website and/or Kimlcards’s
        products and services, and may result in our taking all or any of the
        following actions:
      </Text>{" "}
      <Text style={listItem}>
        - Immediate, temporary or permanent withdrawal of your right to use the
        Kimlcards Website;
      </Text>
      <Text style={listItem}>- Issue of a warning to you;</Text>
      <Text style={listItem}>
        - Legal proceedings against you for reimbursement of all costs on an
        indemnity basis (including, but not limited to, reasonable
        administrative and legal costs) resulting from the breach;
      </Text>
      <Text style={listItem}>- Further legal action against you;</Text>
      <Text style={listItem}>
        - Disclosure of such information to law enforcement authorities as
        Kimlcards reasonably deems as necessary.
      </Text>{" "}
      <Text style={paragraph}>
        The responses described here are not limited and Kimlcards may take any
        other action Kimlcards reasonably deems appropriate.
      </Text>
      <Text style={title}>Force majeure events</Text>
      <Text style={paragraph}>
        Force majeure events are events beyond the control of either party and
        are not reasonably foreseen. They may include but are not limited to
        acts of God, war, state or governmental actions, exchange controls,
        nationalisation, forfeitures, natural disasters, terrorism, and other
        inevitable, unforeseeable, unanticipated, and unpredicted events that
        are not dependent upon the will of the parties.
      </Text>
      <Text style={paragraph}>
        Kimlcards shall not be considered to be in default or breach of any
        terms that govern the relationship between the parties and shall be
        excused from performance or liability for damages to the other party, if
        and to the extent it shall be delayed in or prevented from performing or
        carrying out any of the provisions of these General Terms of Use and/or
        any other applicable terms, arising out of a force majeure event.
      </Text>
      <Text style={title}>Intellectual property rights</Text>
      <Text style={paragraph}>
        The content available on the Kimlcards Website may not be reproduced,
        transmitted, published, performed, broadcast, stored, adapted,
        distributed, displayed, licensed, altered, hyperlinked, or otherwise
        used in whole or in part in any manner without the prior written consent
        of Kimlcards. You may not, without the prior written consent of
        Kimlcards, insert a hyperlink to the Kimlcards Website (or any part
        thereof) on any other platform or “mirror” or frame any content
        available on the Kimlcards Website on any other server or platform.
      </Text>
      <Text style={paragraph}>
        All trademarks, service marks, and logos used on the Kimlcards Website
        are the property of Kimlcards and/or the respective third-party
        proprietors identified on the Kimlcards Website. No licence or right is
        granted and your access to the Kimlcards Website and/or use of the
        services available thereon should not be construed as granting, by
        implication, estoppel or otherwise, any license or right to use any
        trademarks, service marks, or logos appearing on the Kimlcards Website
        without the prior written consent of Kimlcards or the relevant third
        party proprietor thereof.
      </Text>
      <Text style={title}>No reliance on information and disclaimer</Text>
      <Text style={paragraph}>
        The content on the Kimlcards Website is provided for general information
        only. You are encouraged to seek any professional advice before taking,
        or refraining from, any action on the basis of the content on the
        Kimlcards Website.
      </Text>
      <Text style={paragraph}>
        We make no express or implied representations or warranties regarding
        any Kimlcards’s products or services available on the Kimlcards Website,
        including warranties of merchantability, suitability, or fitness for a
        particular purpose, title to, non-infringement of any technology or
        intellectual property we provide, and any warranties arising from course
        of dealing, course of performance, or trade usage.
      </Text>
      <Text style={title}>Limitation of liability</Text>
      <Text style={paragraph}>
        Nothing in these General Terms of Use and/or any other applicable terms
        excludes or limits Kimlcards’s liability for death or personal injury
        arising from our negligence, or our fraud or fraudulent
        misrepresentation, or any other liability that cannot be excluded or
        limited by Hong Kong law.
      </Text>
      <Text style={paragraph}>
        Under no circumstances will we or any of our respective affiliates,
        related or connected parties, or service providers be liable to you for
        any loss or damage arising under or in connection with:
      </Text>
      <Text style={listItem}>
        - Use of, or inability to use, the Kimlcards Website or services.
      </Text>
      <Text style={listItem}>
        - Reliance on any content displayed on the Kimlcards Website.
      </Text>
      <Text style={listItem}>
        - Use of, or inability to use any computer systems used to provide
        Kimlcards’s services.
      </Text>
      <Text style={listItem}>
        - Loss of profits, sales, business, or revenue.
      </Text>
      <Text style={listItem}>- Business interruption.</Text>
      <Text style={listItem}>- Loss of anticipated savings.</Text>
      <Text style={listItem}>
        - Loss of business opportunity, goodwill or reputation.
      </Text>
      <Text style={listItem}>
        - Any indirect or consequential loss or damage.
      </Text>
      <Text style={paragraph}>
        We shall not be liable for any loss or damage caused by hacking,
        tampering, or computer virus, distributed denial-of-service attack, or
        any other technologically harmful material that may infect your computer
        equipment, computer programs, data or other proprietary material due to
        your use of the Kimlcards Website and Kimlcards’s products and services
        or your failure to use or implement any anti-fraud measures, security
        controls or any other data security measures, or to your downloading of
        any content on it, or on any Kimlcards Website linked to it.
      </Text>{" "}
      <Text style={paragraph}>
        Kimlcards assumes no responsibility for the content of Kimlcards sites
        linked on the Kimlcards Website. Such links should not be interpreted as
        an endorsement by us of those linked Kimlcards sites. Kimlcards will not
        be liable for any loss or damage that may arise from your use of them.
      </Text>
      <Text style={paragraph}>
        To the extent that Kimlcards is determined to be liable under these
        General Terms of Use and/or any other applicable terms, you agree that
        Kimlcards shall only be liable to your direct and documented damages,
        subject to a maximum aggregate liability of the amount of fees paid by
        you to us during the three-month period immediately preceding the event
        that gave rise to your claim for damages. These limitations of liability
        will apply to you regardless of the legal theory on which your claim is
        based, including contract, tort (including negligence), strict liability
        or any other theory or basis.
      </Text>
      <Text style={title}>Indemnification</Text>
      <Text style={paragraph}>
        You will, at your own expense, hold harmless, defend, protect, and
        indemnify Kimlcards from and against all losses, claims, breaches,
        suits, damages, liabilities, costs, charges, fines, penalties,
        reasonable attorneys’ fees, judgments, fines, court costs and expenses,
        amounts paid in settlement, and all other liabilities of every nature,
        kind, and description, regardless of the form of action or legal theory,
        incurred by Kimlcards, related to any action or threatened action, suit,
        claim, proceeding or regulatory action, regardless of merit, brought by
        any third party, caused or incurred by, resulting from, arising out of,
        or relating to:{" "}
      </Text>{" "}
      <Text style={listItem}>
        any breach of any term, condition, obligation, representation, warranty,
        or covenant as stipulated in these General Terms of Use and/or any other
        applicable terms specific to Kimlcards’s products and services
      </Text>
      <Text style={listItem}>
        any actual or alleged infringement, violation, or misappropriation of a
        third party’s intellectual property or proprietary rights;{" "}
      </Text>
      <Text style={listItem}>
        any gross negligence, fraud or intentional misconduct;
      </Text>
      <Text style={listItem}>
        any violation of any applicable laws by you or any violation of any
        applicable laws or any rules caused by you; or
      </Text>
      <Text style={listItem}>
        any other acts or omissions, including the acts or omissions of your
        affiliates, representatives, employees, officers, directors or any
        authorised third-party appointed by you.
      </Text>
      <Text style={paragraph}>
        This Indemnification clause shall not limit your responsibility and
        liability to us for any other amounts for which you are responsible
        pursuant to any other provisions of these General Terms of Use or any
        other applicable terms specific to Kimlcards’s products or services.
      </Text>
      <Text style={title}>Linking to the Kimlcards Website</Text>
      <Text style={paragraph}>
        You may link to our home page, provided you do so in a way that is fair
        and legal and does not damage our reputation or take advantage of it.
        You must not establish a link in such a way as to suggest any form of
        association, approval or endorsement on our part where none exists.
      </Text>
      <Text style={paragraph}>
        You must not establish a link to the Kimlcards Website in any Kimlcards
        Website that is not owned by you. The Kimlcards Website must not be
        framed on any other site, nor may you create a link to any part of the
        Kimlcards Website other than the home page. Kimlcards reserves the right
        to withdraw linking permission without notice.
      </Text>
      <Text style={paragraph}>
        The Kimlcards Website in which you are linking must comply in all
        respects with the content standards set out in these General Terms of
        Use. If you wish to make any use of the content on the Kimlcards Website
        other than that set out above, please contact support@kimlcards.com.
      </Text>
      <Text style={title}>
        Third-party links and resources on the Kimlcards Website
      </Text>
      <Text style={paragraph}>
        Subject to the limitations of liability set out herein, where the
        Kimlcards Website contains links to other sites and resources provided
        by third parties, these links are provided for your information only.
        You acknowledge and agree that Kimlcards has no control over the
        contents of those sites or resources. If you access such websites via
        these links, you do so at your own risk.
      </Text>
      <Text style={title}>Our relationship</Text>
      <Text style={paragraph}>
        You acknowledge and agree that no joint venture, partnership,
        employment, or agency relationship exists between you and Kimlcards as a
        result of these General Terms of Service or any other applicable terms
        you may have with Kimlcards or even your use of this Kimlcards Website.
        You agree that you may not and will not claim to be a representative,
        agent, or employee of Kimlcards, and Kimlcards shall not be liable for
        any representation, act, or omission on your part.
      </Text>{" "}
      <Text style={title}>Entire agreement</Text>
      <Text style={paragraph}>
        You acknowledge and agree that these General Terms of Use and any other
        applicable terms that you may have with Kimlcards constitutes the
        complete understanding between the parties, and supersedes all prior
        understandings, arrangements, or agreements whether written or oral,
        regarding Kimlcards’s products and services.
      </Text>
      <Text style={title}>Severability</Text>
      <Text style={paragraph}>
        In the event any of the provisions in these General Terms of Use or any
        other applicable terms that you may have with Kimlcards (collectively
        “Terms”) is determined by any court or governmental authority to be
        invalid, illegal, or unenforceable, these Terms shall be enforced as if
        the unenforceable provision were not present and any partially valid and
        enforceable provision will be enforced to the extent that it is
        enforceable.
      </Text>
      <Text style={title}>Assignment</Text>
      <Text style={paragraph}>
        We may transfer, sell or assign rights or obligations under these
        General Terms of Use or any other applicable terms specific to
        Kimlcards’s products and services to any person or entity without any
        prior consent.
      </Text>
      <Text style={paragraph}>
        You may not transfer, sell, or assign any of your obligations under
        these General Terms of Use and any other applicable terms you may have
        with Kimlcards to any other person or entity without our prior written
        consent. Any assignment in violation of the foregoing will be null and
        void from the beginning. All representations, warranties, covenants and
        agreements by and on behalf of you contained in these General Terms of
        Use and any other applicable terms you may have with Kimlcards shall
        bind your successors and assigns and shall inure to the benefit of
        Kimlcards and its successors and assigns.
      </Text>
      <Text style={title}>Governing law and dispute resolution</Text>
      <Text style={paragraph}>
        These General Terms of Use and/or any other applicable terms that you
        may have with Kimlcards shall generally be governed by and construed in
        accordance with the laws of Hong Kong, without regard to any applicable
        conflict of law provisions. Except as stated otherwise or agreed by the
        parties, you agree that all or any claim or dispute you may have against
        Kimlcards arising out of or in connection with these General Terms of
        Use or any other applicable terms, including its interpretation,
        validity or existence, must be resolved by a court located in Hong Kong.
        You agree to irrevocably submit to the exclusive jurisdiction of the
        courts of Hong Kong for the purpose of any suit, action or other
        proceeding arising out of these General Terms of Use and/or any other
        applicable terms you may have with Kimlcards.
      </Text>
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

export default TermsOfUse;
