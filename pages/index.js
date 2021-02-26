import Divider from "../components/Divider";

export default function Home() {
  return (
    <div>
      <main className="prose max-w-4xl mx-auto">
        <h1>What is UJaaP?</h1>
        <h2 id="how-it-all-started">How it all started</h2>
        <p>
          When I joined LANDR in August 2018, one of my first missions was to
          map out all the communications and campaigns that were being sent to
          our users.
        </p>
        <p>
          We were the third or fourth iteration of the Customer Success team and
          nobody knew the current patchwork in-and-out. There were dozens of
          campaigns with unclear rules and targets, and even more unclear logic.
        </p>
        <p>
          It took me almost a full week to review all messages one by one. I
          checked their copy, their triggers, their timeline, their
          performances… and mapped it all out with AirTable to allow my team and
          other stakeholders to understand what was going on.
        </p>
        <p>
          After that, the first project was to rebuild all that from scratch to
          make sure it was making sense and not overlapping. At that time, our
          Head of Customer Success’s vision was to have a handful of campaigns
          for each major part of our funnel. We’d have one massive Onboarding
          campaign, one Product Discovery campaign, a Cross-Sell one, an Upsell
          one, and so forth.
        </p>
        <p>
          This was mostly meant to avoid any overlap between the messages and
          campaigns and seemed the best way to clean things up and have a
          simpler workflow while dealing with the limitations of Intercom that
          we were using at that time.
        </p>
        <p>
          And all of that made sense at that time. The tree view of messages
          following a top-down logic seemed like the best way to approach it
          based on the tools at our disposal and our Head’s vision. Truth be
          told, this seems to be shared by other orgs as it was pitched as a
          good practice by a couple of speakers at Customer Success Summit 2019.
        </p>
        <p>
          Nevertheless, it felt at that time that we could be using another
          approach. It took multiple months to formulate that idea and shape it
          into what we call today <strong>User Journey as a Product</strong>.
        </p>
        <h2 id="the-problems-faced-by-almost-all-customer-teams">
          The problems faced by almost all customer teams
        </h2>
        <p>
          Whether it is Success, Growth, Experience or <em>whatchacallit</em>,
          we’ve seen countless reports of the customer teams facing the same
          issues again and again.
        </p>
        <p>
          The messaging campaigns are defined by the stage of the funnel the
          users are in or by business goals, rather than the user journey. This
          doesn’t fool anyone anymore and despite everyone’s best efforts it
          feels less and less human.
        </p>
        <p>
          The campaigns are made based on the tools and platforms used by the
          team, rather than the reality of the users. This feels like an
          original sin as teams are compromising their visions and goals from
          the get go to fit to their tool of choice.
        </p>
        <p>
          This in turn generates subsequent problems to tackle: the relevance
          and timeliness of the messages is often subpar, the amount of messages
          sent or to internally handle quickly becomes overwhelming for
          everyone, the onboarding almost never sets the foundation for further
          onboardings in the user journey.
        </p>
        <h3 id="the-consequences-are-dire">The consequences are dire</h3>
        <p>
          It’s almost crazy but these models don’t benefit anyone. The users are
          annoyed, the customer teams are overwhelmed and feel they’re doing
          something wrong, the results of the campaigns are far from optimal,
          and ultimately the brand or product is ignored by its users.
        </p>
        <h3 id="but-this-opens-a-lot-of-opportunities">
          But this opens a lot of opportunities
        </h3>
        <p>
          When you reconsider the approach and the “<em>everybody-does-that</em>
          ” mindset, and when you accept the problems and their consequences,
          you sow the seeds for having a virtuous circle.
        </p>
        <p>
          Indeed, by rethinking the approach and goals, you open up the door to
          improve your user experience, which will in turn improve your
          engagement and retention, which will improve your user experience, and
          so on.
        </p>
        <p>
          You also free yourself from the constraints of your messaging tool,
          whatever it is, and craft a meaningful and platform-agnostic strategy.
        </p>
        <p>
          And this is how the <strong>User Journey as a Product</strong>{" "}
          framework was born in the midst of a transition of a content delivery
          platform and the migration of campaigns built to address a 2.4M
          userbase.
        </p>
        <h2 id="the-ujaap-manifesto">The UJaaP Manifesto</h2>
        <p>
          This framework is meant to be flexible, scalable, and meaningful.
          While opinionated, it’s based on what should be the gold standard for
          user journeys:{" "}
          <em>the right message at the right time in the right place.</em>
        </p>
        <p>
          The output shouldn’t be defining the mission. The ultimate mission of
          a Customer Success or Growth Team is not about just sending zillions
          of emails but to improve their users’ journey and use of their
          product(s).
        </p>
        <p>
          A user should never feel like a message was meaningless. The customer
          team should be able to identify meaningful touchpoints in the user
          journeys, based on data or experiments, and trigger micro-campaigns to
          accompany them.
        </p>
        <p>
          User journeys are living and breathing products. This is not a “
          <em>set if and forget it</em>” mindset but one inspired by iterative
          agile product development. Scope changes as either new features (such
          as new channels or new campaigns) or improvements (fine tuning
          campaigns, testing, fixing issues or poor performances); and combine
          them in sprints.
        </p>
        <h2 id="the-benefits-of-the-ujaap-framework">
          The benefits of the UJaaP framework
        </h2>
        <p>
          This framework brings a lot of benefits that can be seen very quickly
          after implementation:
        </p>
        <ul>
          <li>
            By improving the timeliness and relevance of your campaigns, you’ll
            improve their performances.
          </li>
          <li>
            You increase your velocity so you can ship more campaigns, faster.
          </li>
          <li>
            You go beyond your messaging platform limitations and refuse to be
            bound by them.
          </li>
          <li>
            You have a better understanding of your performance and the impact
            it has on your users and on product use.
          </li>
        </ul>
        <Divider />
        <h1>Core Principles of User Journey as a Product</h1>
        <p>
          Although this framework is meant to be flexible, scalable, and
          meaningful, it is pretty opinionated when it comes to its core
          principles.
        </p>
        <h2 id="the-right-message">The right message</h2>
        <p>
          Have you ever received an email from a service or product you’re using
          that felt irrelevant to you? Did that make you somehow feel like you
          were just another cow to milk?
        </p>
        <p>
          <strong>What is the right message?</strong> The right message is the
          one that answers three important questions:
          <ul className={"list-content"}>
            <li>
              <em>why am I getting this?</em>
            </li>
            <li>
              <em>what’s in it for me?</em>
            </li>
            <li>
              <em>how can I get it?</em>
            </li>
          </ul>
        </p>
        <h2 id="the-right-time">The right time</h2>
        <p>
          The right time is often tied to product/service/feature use and
          activity; rather than a wild guess about what would be the optimal
          time.
        </p>
        <p>
          You should leverage behavioral data or events to trigger your
          micro-campaigns
        </p>
        <h2 id="the-right-place">The right place</h2>
        <p>
          The right place is always where it’s most relevant and natural for
          your user. It might sound obvious but sending an email while an user
          is using your app/product/service might do more harm than good as it
          takes them away from what they were doing.
        </p>
        <p>
          Combined together, a lot of leaks like that can negatively impact your
          user experience and engagement.
        </p>
        <h2 id="data-driven">Data-driven</h2>
        <p>
          Being data-driven means a lot of things. It’s about letting your ego
          go, accepting failures like success, adopting an iterative mindset,
          and leveraging that data to shape and inform your decisions.
        </p>
        <h2 id="ouput-mission">Ouput ≠ Mission</h2>
        <p>
          In a world of KPIs, OKRs, and other acronyms it’s easy to lose your
          focus. Creating messages is the output, not the mission.
        </p>
        <p>
          Your focus should be on improving your users’ journeys. The
          Micro-Campaigns that you will build are just your output.
        </p>
        <h2 id="living-products">Living products</h2>
        <p>
          User journeys are living and breathing products. This is not a “
          <em>set if and forget it</em>” mindset but one inspired by iterative
          agile product development. Scope changes as either new features (such
          as new channels or new campaigns) or improvements (fine tuning
          campaigns, testing, fixing issues or poor performances); and combine
          them in sprints.
        </p>
        <Divider />
        <h1>Micro Campaigns</h1>

        <p>
          The development of visual builders and complex campaign management
          system eventually made obvious issues with such tools. More often than
          not, the easiness with which you can build a complex map of message
          makes you forget the end-user experience. You end up with a cool
          looking web of messages and conditions which ends up being a hell to
          maintain and they don’t always make sense for a user.{" "}
          <strong>Nobody wins, nobody’s happy.</strong>
        </p>
        <h2 id="why-micro">Why “micro”?</h2>
        <p>
          Based on the observation above, UJaaP was designed to prohibit such
          constructs. Following the Core Principles previously edicted, the
          campaigns can only take a certain shape and size.{" "}
          <strong>
            A short succession of touchpoints with a clear and focused goal.
          </strong>
        </p>
        <h2 id="symptoms-of-failure">Symptoms of failure</h2>
        <p>
          You can quickly identify if it’s not a micro campaign if you have the
          following symptoms.
        </p>
        <h3 id="you-have-more-than-5-touchpoints">
          You have more than 5 touchpoints
        </h3>
        <p>
          While it might makes sense in your campaign builder, the reality is
          that there will be a zillion stimuli inbetween each of your
          touchpoints.
        </p>
        <p>
          As a user, how can I keep track and sense of that? It’s too big of an
          ask.
        </p>
        <p>
          There’s no way that a single goal can’t be communicated in less than 5
          messages. If you think otherwise, then the next points will probably
          enlighten you and change your mind.
        </p>
        <h3 id="youre-trying-to-get-your-users-to-accomplish-multiple-goals">
          You’re trying to get your users to accomplish multiple goals
        </h3>
        <p>People are busy. They have priorities outside of your product.</p>
        <p>
          If you respect this, you can’t ask them to accomplish more than one
          simple thing at once.
        </p>
        <p>
          As a user, I don’t have time to figure out{" "}
          <em>what’s in it for me?</em> if I have to take 3 actions.
        </p>
        <p>
          You should be able to show me immediate value with one single action.
        </p>
        <p>
          Not only will this improve conversion funnels, but it will show
          mindfulness towards your users.
        </p>
        <h3 id="youre-basing-your-campaign-on-touchpoints-rather-than-defined-goal">
          You’re basing your campaign on touchpoints rather than defined goal
        </h3>
        <p>
          By far this has been the biggest mistake I’ve seen in my career. I
          can’t even count the number of times people have built their campaigns
          around X number of emails rather than a goal.
        </p>
        <p>
          A classic example is a time-limited sale campaign. How often are those
          designed as
        </p>
        <p>
          <strong>
            "{" "}
            <em>
              we’ll do an announcement, then a reminder, then a last chance with
              a bigger discount
            </em>{" "}
            "
          </strong>
        </p>
        <p>
          without even taking into account the benefit for the end-user or any
          form of goal beyond <strong>make cash™</strong>…
        </p>
        <p>
          How can this perform when there’s no clear goal or value provided?
        </p>
        <h2 id="signs-of-success">Signs of success</h2>
        <h3 id="you-identified-a-goal-and-benefit-from-the-start">
          You identified a goal and benefit from the start
        </h3>
        <p>
          If you know where you’re going and what’s in it for the user, then
          everything will trickle-down from here.
        </p>
        <p>You’ll know what to offer, to whom, and why they should care.</p>
        <h3 id="your-touchpoints-are-designed-to-trigger-at-the-right-time-and-right-place">
          Your touchpoints are designed to trigger at the right time and right
          place
        </h3>
        <p>
          You’re not just mindlessly sending an email every X hour, but you’re
          building an experience or a journey for your user to embark on at a
          time and place that will either make sense or be convenient for them.
        </p>
        <h3 id="the-scope-is-defined-in-terms-of-entry-content-and-exit">
          The scope is defined in terms of entry, content, and exit
        </h3>
        <p>
          Armed with these, you know exactly when people should get in, what
          they’ll receive and why, and how they will exit the campaign (either
          by reaching a goal or going through all the steps).
        </p>
        <Divider />
        <h1>How to implement User Journey as a Product?</h1>
        <h2 id="rebuild-your-journey-mapping">Rebuild your journey mapping</h2>
        <p>
          It’s often easier to start from scratch than to readapt what you
          already have. You also free yourself from any bias or tunnel vision
          that might be residual from the way you used to approach the
          engagement campaigns.
        </p>
        <p>
          By now you must be thinking “
          <em>
            You’re crazy. It’s going to take ages. I don’t have time to redo
            everything
          </em>
          ”.
        </p>
        <p>
          Yet, this is how you’ll be able to fully leverage everything we
          described so far.
        </p>
        <p>
          It’s definitely not a single-day project; but it’s not a 12 months one
          either.
        </p>
        <h2 id="get-the-right-tools">Get the right tools</h2>
        <p>
          I personally dabbled with my fair share of tools and platforms. And
          nothing comes close of the power and flexibility of{" "}
          <a href="https://customer.io">Customer.io</a>. If we chatted about
          marketing automation in the last year or so, I probably annoyed you
          with my praises for this product.
        </p>
        <p>
          My preferred features are Liquid which allows personalization and
          conditional formatting beyond what most of the competition can do, the
          scalability and reliability of the product, the ability to create and
          update user properties directly in a campaign.
        </p>
        <p>
          I don’t get any referral fee, equity, or anything out of this–I just
          genuinely love this tool.
        </p>
        <p>
          When it comes to mapping campaigns, if you don’t have a whiteboard at
          hand, I would suggest taking a look at{" "}
          <a href="https://miro.com/">Miro (formerly RealTimeBoard)</a>.
        </p>
        <h2 id="iterate-and-improve">Iterate and improve</h2>
        <p>
          It goes without saying that this is a continuous cycle. The same way
          product and development moved from big milestone releases and nothing
          in between, customer engagement should also grow past shipping
          monolithic campaign and into an iterative cycle.
        </p>
        <p>
          Relentlessly test content, channels, timelines, and ultimately find
          what yield the best performance for you.
        </p>
        <Divider />
        <h1>Glossary</h1>
        <dl>
          <dt className="font-semibold pt-4">Transactional Email</dt>
          <dd>
            One-to-one emails that contain information that completes a
            transaction or process the recipient has started with you.
          </dd>
          <dt className="font-semibold pt-4">Conversational Email</dt>
          <dd>
            One-to-one emails that contain information designed to nudge the
            recipient into taking an action with a concrete benefit for them.
          </dd>
          <dt className="font-semibold pt-4">Promotional Email</dt>
          <dd>One-to-many emails sent about a promotion or an offer</dd>
          <dt className="font-semibold pt-4">Inapp</dt>
          <dd>
            Also known as inwebs, popups, layovers, modals, hellobars,
            inbrowsers... Message displayed on the website of your product
            during its use by a user.
          </dd>
          <dt className="font-semibold pt-4">Trigger</dt>
          <dd>
            Event or set of condition that justifies the sending of a message.
          </dd>
          <dt className="font-semibold pt-4">Touchpoints</dt>
          <dd>Message sent on a channel to interact with the user.</dd>
          <dt className="font-semibold pt-4">User Journey(s)</dt>
          <dd>
            Ensemble of paths a user can take with your product. Range from
            micro (for instance using a feature) to macro (for instance the
            lifetime use of your product)
          </dd>
        </dl>
      </main>
    </div>
  );
}
