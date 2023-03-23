import Head from "next/head";
import { Layout } from "../components/layout";
import { HeroBanner } from "../components/blocks/heroBanner";
import { Container } from "../components/util/container";

const TermsAndConditions = () => (
  <Layout>
    <HeroBanner headline="Terms and conditions" />
    <Container>
      <section className="prose dark:prose-invert max-w-3xl mx-auto">
        <h2>1. Services</h2>

        <ol type="a">
          <li>Hatch Head Pty Ltd ACN 647 869 752 (Hatch Head) agrees to:</li>

          <ol type="i">
            <li>
              provide the Services to the client set out in the attached
              proposal <b>(Client)</b> and as otherwise agreed between the
              parties in any future proposal <b>(Proposal)</b> in accordance
              with these terms and conditions <b>(Terms)</b>; and{" "}
            </li>
            <li>
              perform the Services using qualified personnel in a professional
              manner in accordance with generally applicable Australian
              standards and regulations.{" "}
            </li>
          </ol>

          <li>
            By accepting a Proposal, or otherwise accepting commencement of the
            Services, the Client agrees to these Terms.
          </li>
        </ol>

        <h2>2. Client obligations</h2>

        <ol type="i">The Client, using qualified personnel, shall:</ol>

        <ol type="a">
          <li>
            provide all Client Data required by Hatch Head to allow Hatch Head
            to complete the Services in a timely fashion and as required by
            Hatch Head;{" "}
          </li>
          <li>
            carry out agreed preparations and take other steps reasonably
            requested by Hatch Head to allow Hatch Head to perform the Services;
          </li>
          <li>
            grant Hatch Head access to the premises, equipment, computer bases,
            software and hardware necessary for Hatch Head to perform the
            Services;{" "}
          </li>
          <li>
            review information, make decisions and, on an ongoing basis, provide
            Hatch Head with the information necessary for Hatch Head to perform
            the Services; and
          </li>
          <li>
            provide Hatch Head with true and relevant information regarding the
            Client and its business.
          </li>
        </ol>

        <h2>3. User Acceptance Testing</h2>

        <ol type="a">
          <li>
            The Client may perform UAT in respect of any Deliverable only in
            accordance with the UAT processes set out in a Proposal or as
            otherwise agreed between the parties in writing.{" "}
          </li>
          <li>
            Hatch Head shall provide the Client with reasonable assistance to
            prepare and undertake each UAT.{" "}
          </li>
        </ol>

        <h2>4. Change Requests</h2>

        <ol type="a">
          <li>
            Where the Client wishes to make any change to the Services or the
            Deliverables, provided such change is within the reasonable capacity
            of Hatch Head to provide, the Client may submit a change request
            (Change Request) to Hatch Head. The Change Request must contain
            sufficient detail for Hatch Head to determine the effect of the
            requested change on the scope of the Services and Deliverables and
            the Fees (using Hatch Head’s then current charge rates).
          </li>
          <li>
            Within a reasonable period of receiving a Change Request, Hatch Head
            will provide to the Client a proposal for performing the changes to
            the Services and/or the Deliverables including:
            <ol type="i">
              <li>the proposed new Services and Deliverables; and</li>
              <li>any revised Fees and expenses.</li>
            </ol>
          </li>
          <li>
            Hatch Head will have no obligation to make the requested change
            until the parties have agreed and signed a written agreement
            specifying, in particular, any changes to the Services and the Fees.
          </li>
        </ol>

        <h2>5. Fees and invoicing</h2>

        <h3>5.1 Fees</h3>

        <ol type="a">
          <li>
            The Client shall pay Hatch Head the Fees for the Services.
            <ol type="i">
              <li>
                Background IP means any Intellectual Property Rights owned by
                Hatch Head which are created or derived independently of these
                Terms; and
              </li>
              <li>
                Third Party IP means Intellectual Property Rights proprietary to
                third parties (including open-source software) which are
                utilized by Hatch Head in the provision of the Services.
              </li>
            </ol>
          </li>
          <li>
            Fees specified in these Terms and a Proposal are exclusive of GST
            and other similar taxes and surcharges and net of withholding or
            other similar taxes.{" "}
          </li>
        </ol>

        <h3>5.2 GST</h3>

        <ol type="a">
          <li>
            If Goods and Services Tax (GST) has application to any supply made
            under or in connection with these Terms, Hatch Head may, in addition
            to any amount or consideration payable under these Terms, recover
            from the Client an additional amount on account of GST, such amount
            to be calculated by multiplying the amount or consideration payable
            by the Client for the supply by the prevailing GST rate.{" "}
          </li>
          <li>
            Any additional amount on account of GST recoverable from the Client
            under this clause shall be calculated without any deduction or
            set-off of any other amount and is payable by the Client upon demand
            by Hatch Head whether such demand is by means of an invoice or
            otherwise.
          </li>
        </ol>

        <h3>5.3 GST</h3>

        <ol type="a">
          <li>
            In addition to the Services Fee, the Client shall pay all reasonable
            costs incurred by Hatch Head while performing support tasks,
            including but not limited to data communication costs, third party
            hosting costs, and the costs of any third-party software/plugins
            unless expressly specified otherwise in a Proposal{" "}
            <b>(Additional Services Fee).</b>{" "}
          </li>
          <li>
            Hatch Head shall together with its invoice for the Services Fee,
            submit details of any Additional Services Fee to the Client.{" "}
          </li>
        </ol>

        <h3>5.4 Invoices</h3>

        <ol type="a">
          <li>
            Within 10 Business Days of the last day of each calendar month or on
            such other dates as set out in a Proposal, Hatch Head must issue to
            the Client an invoice for the Fees and charges payable in respect of
            that period.
          </li>
          <li>
            The Client must pay invoices within 14 Business Days of receipt.
          </li>
        </ol>

        <h3>5.5 Failure to pay</h3>

        <ol type="a">
          If the Client does not pay the Fees on or before the due date, Hatch
          Head shall be entitled to receive interest on overdue payments of 1%
          per month and shall be entitled to withhold delivery or part thereof
          of Services yet to be provided.
        </ol>

        <h3>5.6 Set off</h3>

        <ol type="a">
          Hatch Head may, without limiting any other rights or remedies it may
          have, set off any amounts owed to it by the Client under these Terms
          against any amounts payable by Hatch Head to the Client.
        </ol>

        <h2>6. Intellectual Property Rights</h2>

        <h3>6.1 Ownership</h3>

        <ol type="a">
          <li>
            Upon full payment of the Fees, and subject to the Client’s final approval of such Deliverables in accordance with clause 3, the Intellectual Property Rights,
            other than the Background IP and the Third Party IP, in each of the
            Deliverables, the Application(s) and the Documentation shall vest in
            and become the absolute property of the Client Assigned IP) and the
            Client grants to Hatch Head a perpetual non-exclusive, royalty-free
            right to use the Assigned IP so long as such use does not otherwise
            breach its obligations under these Terms.


          </li>
          <li>
            The
            <ol type="i">
              <li>
                Background IP is, and shall remain the property of Hatch Head;
                and
              </li>
              <li>
                Third Party IP is, and shall remain the property of the relevant
                third party owner,
              </li>
            </ol>
            and for so long as the Client is not in breach of these Terms, Hatch
            Head grants to the Client a perpetual non-exclusive, royalty-free,
            non-transferable right to use the Background IP and the Third Party
            IP to the extent necessary to obtain the full benefit of the
            Deliverables and the Services.
          </li>
          <li>
            For the purposes of this clause:
            <ol type="i">
              <li>
                <b>Background IP</b> means any Intellectual Property Rights
                owned by Hatch Head which are created or derived independently
                of these Terms; and
              </li>
              <li>
                <b>Third Party IP</b> means Intellectual Property Rights
                proprietary to third parties (including open-source software)
                which are utilized by Hatch Head in the provision of the
                Services.
              </li>
            </ol>
          </li>
          <li>
            Notwithstanding anything else in this clause 6.1, the parties agree that all Intellectual Property Rights in any designs, concepts or other creative materials that do not form part of a final, approved Deliverables or are otherwise rejected by the Client at any time (including under clause 3) shall remain the property of Hatch Head.
          </li>
        </ol>

        <h3>6.2 Initial Proposal</h3>

        <ol type="a">
          Notwithstanding clause 6.1, where the Services consist (in whole or in
          part) of a detailed plan by Hatch Head setting out how Hatch Head
          proposes to complete a specific project or mandate, and such Proposal
          is not accepted by the Client, without limiting any other clause in
          these Terms, the Intellectual Property Rights in such Proposal shall
          remain the property of Hatch Head and the Client must not disclose
          such Proposal to any third party for the purposes of requesting that
          third party to utilise, replicate or modify such Proposal for the
          purpose of providing any similar services to the Client.
        </ol>

        <h3>6.3 Client Data</h3>

        <ol type="a">
          <li>
            All Intellectual Property Rights in the Client Data remain the
            property of the Client or relevant third parties and nothing in
            these Terms shall be construed as giving Hatch Head any rights to
            such Intellectual Property Rights.{" "}
          </li>
          <li>
            In the event Hatch Head or its personnel are permitted access to or
            are otherwise provided with Client Data for any reason then, without
            prejudice to clause 8, Hatch Head and its personnel shall not
            without the prior written consent of the Client distribute,
            duplicate, reproduce or any way use (or permit the use of) any
            Client Data, or, modify, amend or alter the contents of Client Data
            or disclose or permit the disclosure of the Client Data to any third
            party without the prior consent of the Client.{" "}
          </li>
        </ol>

        <h3>6.4 Client warranty and indemnity</h3>

        <ol type="a">
          <li>
            The Client warrants that:
            <ol type="i">
              <li>
                it owns, or holds any necessary license of, all Intellectual
                Property Rights in the Client Data; and
              </li>
              <li>
                in utilizing any Client Data, Hatch Head will not infringe,
                violate or otherwise conflict with any Intellectual Property
                Rights owned by a third party.
              </li>
            </ol>
          </li>
          <li>
            The Client indemnifies Hatch Head from and against any liability
            arising out of any claim by a third party that the Client Data
            violates or infringes any Intellectual Property Rights owned by a
            third party.
          </li>
        </ol>

        <h3>6.5 Hatch Head warranty and indemnity </h3>

        <ol type="a">
          <li>
            Hatch Head warrants that:
            <ol type="i">
              <li>
                it owns, or holds any necessary license of, all Intellectual
                Property Rights in each Application, the Services and the
                Deliverables; and
              </li>
              <li>
                in utilising each Application, the Services and the
                Deliverables, the Client will not infringe, violate or otherwise
                conflict with any Intellectual Property Rights owned by a third
                party.
              </li>
            </ol>
          </li>
          <li>
            Hatch Head indemnifies the Client from and against any liability
            arising out of any claim by a third party that Hatch Head and any of
            its Services, Deliverables or any Application violates or infringes
            any Intellectual Property Rights owned by a third party.
          </li>
        </ol>

        <h2>7. Term and termination</h2>

        <h3>7.1 Term</h3>

        <ol type="a">
          <li>
            This document will commence upon the Commencement Date and will
            continue until terminated under clause 7.2, by mutual agreement
            between the parties or as otherwise set out in a Proposal.{" "}
          </li>
          <li>
            If no term is expressly set out in a Proposal, the engagement and
            this agreement to provide the Services will be terminable by Hatch
            Head on 30 days’ notice, provided such notice does not expire before
            the first anniversary of the date of commencement of the Services.
          </li>
        </ol>

        <h3>7.2 Termination for cause</h3>

        <ol type="a">
          In addition to any other rights to terminate set out in these Terms
          either party may at any time terminate this agreement with immediate
          effect by giving written notice to the other party if:
        </ol>

        <ol type="a">
          <li>
            the other party fails to pay any amount due pursuant to these Terms
            on the date for payment and remains in default not less than 14 days
            after being notified in writing to make such payment;
          </li>
          <li>
            the other party commits a material breach of these Terms and (if
            such breach is remediable) fails to remedy that breach within a
            period of 30 days after being notified in writing to do so;
          </li>
          <li>
            the other party repeatedly breaches any term of these Terms in such
            a manner as to reasonably justify the opinion that its conduct is
            inconsistent with it having the intention or ability to give effect
            to these Terms; or
          </li>
          <li>the other party suffers an Insolvency Event.</li>
        </ol>

        <h3>7.3 Obligations on termination </h3>

        <ol type="a">
          <li>
            On termination or expiry, each party shall as soon as reasonably
            practicable:
            <ol type="i">
              <li>
                return, destroy or permanently erase (as directed in writing by
                the other party) any documents, handbooks, storage devices or
                other information or data provided to it by the other party
                containing, reflecting, incorporating or based on Confidential
                Information belonging to the other party;
              </li>
              <li>
                permanently delete any proprietary software belonging to the
                other party from its IT network or its storage devices;
              </li>
              <li>
                promptly return (within ten days from termination or request) to
                the disclosing party all tangible Confidential Information (and
                all copies thereof) of the disclosing party, or upon written
                request from the disclosing party, destroy such Confidential
                Information;{" "}
              </li>
              <li>
                cease all further use of the other party’s Confidential
                Information, whether in tangible or intangible form; and
              </li>
              <li>return all of the other party’s equipment and materials,</li>
            </ol>
            provided that:
            <ol type="i">
              <li>
                the Client may retain copies of any Hatch Head Confidential
                Information incorporated into the Deliverables or to the extent
                necessary to allow it to make full use of the Services; and
              </li>
              <li>
                if a party is required by any law, regulation, or government or
                regulatory body to retain any documents or materials containing
                the other party’s Confidential Information, it shall notify the
                other party in writing of such retention, giving details of the
                documents and/or materials that it must retain.
              </li>
            </ol>
          </li>
          <li>
            On termination for any reason, the Client shall immediately pay any
            outstanding unpaid invoices and interest due to Hatch Head. Hatch
            Head shall submit invoices for any Services that it has supplied,
            but for which no invoice has been submitted, and the Client shall
            pay these invoices immediately on receipt.
          </li>
        </ol>

        <h2>8. Confidentiality</h2>

        <ol type="a">
          <li>
            Each party agrees to, and shall ensure each of its officers,
            employees and contractors:
            <ol type="i">
              <li>
                hold in strict confidence all Confidential Information of the
                other party;
              </li>
              <li>
                use the Confidential Information solely to perform or to
                exercise its rights under these Terms; and
              </li>
              <li>
                not transfer, display, convey or otherwise disclose or make
                available all or any part of such Confidential Information to
                any third party.{" "}
              </li>
              <li>
                use its best endeavours, including keeping such information in a
                safe place and implementing adequate security measures, to
                ensure that all Confidential Information is secure from
                unauthorized use, disclosure or copying by third parties.
              </li>
            </ol>
          </li>
          <li>
            The obligations in clause 8(a) do not apply:
            <ol type="i">
              <li>
                to the extent necessary to enable disclosure required by law;
              </li>
              <li>to a disclosure agreed in writing between the parties; or</li>
              <li>
                where the Confidential Information has entered the public domain
                other than as a result of a breach by the Client of these Terms.
              </li>
            </ol>
          </li>
        </ol>

        <h2>9. Limited warranty and exclusion of liability</h2>

        <h3>9.1 Limitation of Liability</h3>

        <ol type="a">
          <li>
            This clause sets out the entire financial liability of the parties
            (including any liability for the acts or omissions of its employees,
            agents and subcontractors) to each other in respect of:
            <ol type="i">
              <li>any breach of these Terms; </li>
              <li>
                any use made of the Services, the Deliverables or an
                Application; and
              </li>
              <li>
                any representation, statement or tortious act or omission
                (including negligence) arising under or in connection with these
                Terms.
              </li>
            </ol>
          </li>
          <li>
            As far as the law permits and unless otherwise specified in these
            Terms;
            <ol type="i">
              <li>
                all liability to a party for any injury, loss damage, cost or
                expense relating to or arising from these Terms, except to the
                extent that the injury, loss, damage, cost or expense arises
                from the negligent act or omission of a party, is excluded;
              </li>
              <li>
                the Client shall be solely responsible, as against Hatch Head,
                for any opinions, recommendations, forecasts or other
                conclusions made or actions taken by the Client, any client of
                the Client or any other third party based (wholly or in part) on
                the results obtained from the use of the Services by the Client;{" "}
              </li>
              <li>
                Hatch Head shall have no liability for any damage caused by
                errors or omissions in any information or instructions provided
                to Hatch Head by the Client in connection with the Services;
              </li>
              <li>
                Hatch Head shall have no liability for, and no obligation to
                amend, replace or refund, any Deliverables that cease to
                function in accordance with any agreed specifications or
                services levels to the extent the failure arises from a change
                to any operating or software platform or any change to the terms
                and conditions implemented by any third party;
              </li>
              <li>
                all warranties, representations, conditions and all other terms
                of any kind whatsoever implied by statute or common law are
                excluded from these Terms; and
              </li>
              <li>
                where the Services becomes unavailable due to the failure of any
                third-party hosting provider, Hatch Head’ liability for a breach
                of these Terms will be limited to the extent that such failure
                was caused, or contributed to, by Hatch Head.
              </li>
            </ol>
          </li>
        </ol>

        <h3>9.2 Mitigation</h3>

        <ol type="a">
          Each party must mitigate any loss it suffers as a result of the breach
          by the other party to these Terms or any warranty or indemnity
          provided under these Terms.{" "}
        </ol>

        <h3>9.3 Maximum liability</h3>

        <ol type="a">
          <li>
            Subject to clause 9.3(b), the total liability of each party arising
            under or in connection with these Terms will be limited in the
            aggregate to the total Fees payable in the previous 12 month period.
          </li>
          <li>
            Clause 9.3(a) will not limit or exclude the liability of either
            party for any claim arising from:
            <ol type="i">
              <li>
                death or personal injury or damage to property resulting from
                negligence; or
              </li>
              <li>fraud or fraudulent misrepresentation; or</li>
              <li>
                the deliberate default or wilful misconduct of that party or its
                employees, agents or contractors;
              </li>
              <li>the non-payment of any Fees; or</li>
              <li>the indemnities contained in clauses 6.4 and 6.5.</li>
            </ol>
          </li>
        </ol>

        <h3>9.4 Consequential Loss</h3>

        <ol type="i">
          Neither party will be liable to the other or any other person for any
          Consequential Loss.
        </ol>

        <h3>9.5 Australian Consumer Law</h3>

        <ol type="a">
          If the Australian Consumer Law applies to the supply of goods or
          services under these Terms, Hatch Head acknowledges and agrees that
          its goods and services come with a guarantee that cannot be excluded
          under the Australian Consumer Law, and that the following mandatory
          notice under section 102(1) of the Australian Consumer Law that must
          be provided to the Client will apply:
        </ol>
        <ol type="a">
          <i>
            Our goods and services come with guarantees that cannot be excluded
            under the Australian Consumer Law. For major failures with the
            service, you are entitled:
          </i>


          <ol type="a">
            <li>
              <i>to cancel your service contract with us; and</i>
            </li>
            <li>
              <i>
                to a refund for the unused portion, or to compensation for its
                reduced value.
              </i>
            </li>
          </ol>
        </ol>

        <ol type="a">
          <i>
            You are also entitled to choose a refund or replacement for major
            failures with goods. If a failure with the goods or a service does
            not amount to a major failure, you are entitled to have the failure
            rectified in a reasonable time. If this is not done you are entitled
            to a refund for the goods and to cancel the contract for the service
            and obtain a refund of any unused portion. You are also entitled to
            be compensated for any other reasonably foreseeable loss or damage
            from a failure in the goods or service.
          </i>
        </ol>



        <h2>10. Data Protection</h2>

        <ol type="a">
          <li>
            Both parties must comply with all applicable requirements of the
            Data Protection Legislation.{" "}
          </li>
          <li>
            Without prejudice to the generality of clause 9.5(a), the Client
            will ensure that it has all necessary and appropriate consents and
            notices in place to enable lawful transfer of any personal data to
            Hatch Head for the duration and purposes of these Terms so that
            Hatch Head may lawfully use, process and transfer the personal data
            in accordance with these Terms on the Client’s behalf.
          </li>
          <li>
            Hatch Head shall notify the Client immediately if it becomes aware
            of any security incident affecting its network and information
            systems that could potentially affect the Client and shall respond
            without delay to all queries and requests for information from the
            Client about any security incident, whether discovered by Hatch Head
            or the Client.{" "}
          </li>
        </ol>

        <h2>11. Non-solicitation</h2>

        <ol type="a">
          <li>
            During the term of these Terms and for a period of six months after
            its termination neither party shall, without the prior written
            consent of the other, solicit, or permit any related entity of that
            party to solicit, the employment of any person who is employed by
            the other party or its related entities in the course of developing,
            supplying, maintaining or supporting the Services or any part of it.
          </li>
          <li>
            if a party breaches clause 11(a), then it shall pay to the other
            party an amount equal to twelve month’s salary (excluding any bonus
            or benefits) for the employee concerned in recognition only of the
            disruption that such inducement has caused to the efficient conduct
            of the other party's business.
          </li>
        </ol>

        <h2>12. Force Majeure</h2>

        <ol type="a">
          Neither party shall be liable for any delay or failure to perform its
          obligations pursuant to this document if such delay is due to a Force
          Majeure Event.{" "}
        </ol>

        <h2>13. Dispute Resolution</h2>

        <ol type="a">
          <li>
            Neither party may commence court proceedings concerning any dispute
            between the parties arising out of or in relation to this document
            (Dispute), unless the party starting the proceedings has complied
            with this clause 13.
          </li>
          <li>
            A party claiming that a Dispute has arisen must notify the other
            party in writing, specifying the nature of the Dispute (Dispute
            Notice).
          </li>
          <li>
            Following the Dispute Notice being given, the CEO of both parties
            must endeavour in good faith to resolve the Dispute within 14 days.
          </li>
          <li>
            If the Dispute is not resolved within 14 days of the Dispute Notice
            being given, the parties must endeavour in good faith to resolve the
            Dispute by mediation as follows:
            <ol type="i">
              <li>
                if the parties fail to agree on the appointment of a mediator
                within 21 days of the Dispute Notice being given, either party
                may apply to the President of the Law Society of Queensland or
                the nominee of the President to nominate a mediator (which
                nomination the parties must accept);
              </li>
              <li>
                if the mediator accepts the appointment, the parties must comply
                with the mediator’s instructions;
              </li>
              <li>
                if the Dispute is not resolved within 21 days of the appointment
                of a mediator, the mediation ceases;
              </li>
              <li>
                the parties will be jointly responsible for the fees of the
                mediation, and each party is to bear its own costs in relation
                to the mediation;
              </li>
              <li>the mediation will be held in Brisbane, Queensland;</li>
              <li>
                the parties may be legally represented at the mediation; and
              </li>
              <li>
                the mediation will not be bound by the rules of natural justice
                and may discuss the Dispute with a party in the absence of any
                other party and their advisers.
              </li>
            </ol>
          </li>
          <li>
            Nothing in this clause prevents a party from seeking urgent
            interlocutory relief in a court.
          </li>
        </ol>

        <h2>14. General</h2>

        <h3>14.1 Amendments</h3>

        <ol type="i">
          This document may only be amended by written agreement between all
          parties.
        </ol>

        <h3>14.2 Governing law and jurisdiction</h3>

        <ol type="i">
          The laws of Queensland govern this document and each party irrevocably
          submits to the non-exclusive jurisdiction of the courts of Queensland
          and courts competent to hear appeals from those courts.
        </ol>

        <h3>14.3 Assignment</h3>

        <ol type="i">
          Neither party may assign, in whole or in part any of its rights and
          obligations under this document without the prior written consent of
          the other party.
        </ol>

        <h3>14.4 Severability</h3>

        <ol type="i">
          A clause or part of a clause of this document that is illegal or
          unenforceable may be severed from this document and the remaining
          clauses or parts of the clause of this document continue in force.
        </ol>

        <h3>14.5 Entire agreement</h3>

        <ol type="i">
          These Terms supersede all previous agreements about its subject
          matter. This agreement embodies the entire agreement between the
          parties.
        </ol>

        <h3>14.6 Further assurances</h3>

        <ol type="i">
          Each party must do all things reasonably necessary to give effect to
          this document and the transactions contemplated by it.
        </ol>

        <h3>14.7 Costs</h3>

        <ol type="i">
          Each party bears its own costs in relation to the preparation of these
          Terms.
        </ol>

        <h3>14.8 No waiver</h3>

        <ol type="a">
          <li>
            The failure of a party to require full or partial performance of a
            provision of these Terms does not affect the right of that party to
            require performance subsequently.
          </li>
          <li>
            A single or partial exercise of or waiver of the exercise of any
            right, power or remedy does not preclude any other or further
            exercise of that or any other right, power or remedy.{" "}
          </li>
          <li>
            A right under these Terms may only be waived in writing signed by
            the party granting the waiver, and is effective only to the extent
            specifically set out in that waiver.
          </li>
        </ol>

        <h3>14.9 Notices</h3>

        <ol type="a">
          <li>
            A notice, consent or communication under these Terms must be in
            writing, signed by or on behalf of the person giving it, addressed
            to the person to whom it is to be given and delivered by hand, sent
            by prepaid mail or sent by email to that person's address as
            specified in the Proposal or as the person notifies the sender.
          </li>
          <li>
            A notice, consent or communication is given and received:
            <ol type="i">
              <li>if it is hand delivered, on the day it is given;</li>
              <li>
                if it is sent by post, three business days after posting (if
                within Australia) or seven business days after posting (if
                outside Australia); and
              </li>
              <li>
                if it is sent by email, that day, if the time of departure from
                the sender's mail server is before 5.00pm on a business day, or
                the next business day in any other case, unless the sender
                receives an automated message generated by the recipient's mail
                server (other than an 'out of office' message or other response
                generated by or at the instigation of the recipient) that the
                email has not been delivered within two hours.
              </li>
            </ol>
          </li>
        </ol>

        <h2>15. Defined terms & interpretation</h2>

        <h3>15.1 Defined terms</h3>

        <ol type="i">In these terms:</ol>

        <ol type="a">
          <li>
            <b>Application</b> means the tools or applications developed by
            Hatch Head which are specified in the Services.{" "}
          </li>
          <li>
            <b>Australian Consumer Law</b> means schedule 2 to the Competition
            and Consumer Act 2010 (Cth).
          </li>
          <li>
            <b>Business Day</b> means a day that is not a Saturday, Sunday or
            public holiday in Brisbane, Queensland.
          </li>
          <li>
            <b>Client Data</b> means all information provided by the Client for
            the purposes of providing the Services to be stored, transmitted,
            processed and/or retrieved by Hatch Head in its performance of the
            Services.
          </li>
          <li>
            <b>Commencement Date</b> means the date of acceptance of these
            Terms.{" "}
          </li>
          <li>
            <b>Confidential Information</b> means any information:
            <ol type="i">
              <li>relating to the business and affairs of a party;</li>
              <li>
                relating to the customers, clients, employees, sub-suppliers or
                other persons doing business with a party;
              </li>
              <li>relating to these Terms or a Proposal; </li>
              <li>
                relating to the Intellectual Property Rights or Source Code of a
                party;{" "}
              </li>
              <li>which is by its nature confidential;</li>
              <li>which is designated as confidential by a party; or</li>
              <li>
                which the other party knows or ought to know, is confidential,
              </li>
            </ol>
            and includes all trade secrets, knowhow, marketing, financial and
            customer information, forecasts, and strategies and any other
            commercially valuable information of a party.
          </li>
          <li>
            <b>Consequential Loss</b> means indirect, economic, special or
            consequential loss or damage, loss of revenue, time, goodwill, data,
            anticipated savings, opportunity, loss of production and loss of
            profit.
          </li>
          <li>
            <b>Data Protection Legislation</b> means:
            <ol type="i">
              <li>
                the Privacy Act 1988 (Cth) and any ancillary rules, guidelines,
                orders, directions, directives, codes of conduct or other
                instruments made or issued under it, as amended from time to
                time;
              </li>
              <li>
                the Australian Privacy Principles (or APPs) contained in
                schedule 1 of the Privacy Act referred to in (i); and{" "}
              </li>
              <li>
                all other laws, regulations, registered privacy codes, privacy
                policies and contractual terms applicable in the jurisdiction
                where the Services are being provided that relate to the
                processing of personal information.
              </li>
            </ol>
          </li>
          <li>
            <b>Deliverables</b> means the products or services to be delivered as final
            to, and approved by, the Client by Hatch Head as set out in a Proposal.{" "}
          </li>
          <li>
            <b>Documentation</b> means any operating manuals, user instruction
            manuals, technical literature and all other related materials in
            human-readable or machine-readable forms supplied by Hatch Head as
            part of the Deliverables.
          </li>
          <li>
            <b>Fee</b> means the fees for the Services payable by the Client
            under these Terms and as set out in a Proposal, including the
            Services Fee and any Additional Services Fee.{" "}
          </li>
          <li>
            <b>Force Majeure Event</b> means an act of God, national emergency,
            terrorist act, sabotage, flood, storm, earthquake, pandemic,
            epidemic, fire, explosion, civil disturbance, insurrection, riot,
            war, industrial action, lockout, rebellion, quarantine, embargo and
            other similar governmental action or a general and continued energy
            shortage, power or utilities interruption or failure.
          </li>
          <li>
            <b>Insolvency Event</b> means any of the following events concerning
            a party:
            <ol type="i">
              <li>
                if an administrator, liquidator, receiver, receiver and manager
                or other controller is appointed to, or over, any of the
                property or undertaking of the party;
              </li>
              <li>
                if the party is unable to pay its debts when they become due and
                payable;
              </li>
              <li>if the party ceases to carry on business; or</li>
              <li>
                if any event happens in Australia or any other country or
                territory in respect of a party that is similar to any of the
                events or circumstances referred to in this definition
              </li>
            </ol>
          </li>
          <li>
            <b>Intellectual Property Rights</b> means all industrial and
            intellectual property rights throughout the world, whether
            registered, unregistered or unregistrable, including all copyrights,
            patents, trademarks, service marks, designs, confidential
            information, trade secrets, know how, data and databases, systems
            and domain names.
          </li>
          <li>
            <b>Services</b> means the services to be provided by Hatch Head as
            specified in each Proposal or as otherwise agreed between the
            parties.{" "}
          </li>
          <li>
            <b>Services Fee</b> means the fee set out in a Proposal or if not
            specified, an amount calculated at Digital Maker’s usual rates and
            charges to carry out the Services and reviewed annually.
          </li>
          <li>
            <b>Source Code</b> means software written in a form intelligible to
            trained programmers and capable of being translated into object code
            through assembly or compiling for operations on computer equipment.
          </li>
          <li>
            <b>UAT</b> means User Acceptance Testing.{" "}
          </li>
        </ol>

        <h3>15.2 Interpretation</h3>

        <ol type="i">In these Terms:</ol>

        <ol type="a">
          <li>
            a reference to a clause, schedule, annexure or party is a reference
            to a clause of, and a schedule, annexure or party to, this document;
          </li>
          <li>
            a reference to a party to this document or any other document or
            agreement includes the party's successors, permitted substitutes and
            permitted assigns;
          </li>
          <li>
            if a word or phrase is defined, its other grammatical forms have a
            corresponding meaning;
          </li>
          <li>
            a reference to a document or agreement (including a reference to
            these terms) is to that document or agreement as amended,
            supplemented, varied or replaced;
          </li>
          <li>
            a reference to legislation or to a provision of legislation
            (including subordinate legislation) is to that legislation as
            amended, re-enacted or replaced, and includes any subordinate
            legislation issued under it;
          </li>
          <li>
            if any day on or by which a person must do something under this
            document is not a Business Day, then the person must do it on or by
            the next Business Day;
          </li>
          <li>
            a reference to a person includes a corporation, trust, partnership,
            unincorporated body, government and local authority or agency, or
            other entity whether or not it comprises a separate legal entity;{" "}
          </li>
          <li>a reference to '$' or 'dollar' is to Australian currency; and</li>
          <li>
            the meaning of any general language is not restricted by any
            accompanying example, and the words 'includes', 'including', 'such
            as', or 'for example' (or similar phrases) do not limit what else
            might be included.
          </li>
        </ol>
      </section>
    </Container>
  </Layout>
);

export default TermsAndConditions;
