import Head from "next/head";
import Image from "next/image";
import Goodnews from "../components/goodnews";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Services from "../components/services";

export default function Home() {
  const date = new Date();
  const yearToday = date.getFullYear();
  return (
    <div className="">
      <Head>
        <title>Landing - Disha - clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Goodnews />
      <Navbar />
      <div className="text-center pt-8 h-screen">
        <h1 className="text-6xl w-2/3 font-semibold  mx-auto mt-24 leading-tight">
          Everything you need to get paid for being great
        </h1>
        <p className="text-2xl w-2/5 mx-auto font-normal text-disha-grey mt-14">
          Disha lets you focus on creating amazing stuff while we enable you
          with all the tools you need to thrive in today’s creator economy.
        </p>
        <Button
          title="Get started"
          className=" bg-disha-orange p-3 w-1/4 mt-12 rounded-lg transition-colors hover:bg-white hover:text-black font-semibold text-sm"
        />
      </div>
      <div className="h-2/3 bg-disha-bg-grey text-center text-black p-14">
        <h2 className="text-4xl font-semibold m-5 tracking-wide">
          What is Disha?
        </h2>
        <p className=" text-2xl font-normal text-disha-text-grey leading-9 w-9/12 mx-auto">
          A platform for creatives. Disha is helping creators make a living by
          offering them simple tools to create a one-page site that enables them
          to curate and share their favourite links, content, portfolios and
          receive payments from their audience worldwide.
        </p>
        <Button
          title="Learn More"
          className="bg-black text-white p-3 w-1/4 mt-12 rounded-lg transition-colors animate-bounce hover:bg-disha-text-grey font-semibold text-sm"
        />
      </div>
      <div className="bg-white">
        <div className="text-black flex items-center justify-between p-16">
          <div>
            <Image
              src="/Disha-Pages.jpeg"
              width={300}
              height={600}
              alt="dishapages"
              className="rounded-2xl"
            />
          </div>
          <div className="w-2/5">
            <h5 className="text-lg font-bold">Disha Pages</h5>
            <h1 className="text-5xl font-extrabold mt-5">
              Showcase and convert with customised landing pages
            </h1>
            <p className=" text-2xl my-7 leading-9">
              Create, edit and publish a beautiful responsive website instantly.
              You won’t need any coding knowledge to get started.
            </p>
            <p className=" text-sm leading-10 mx-8 px-5">
              Add links, images, videos, and text in sections Customize fonts,
              colours and custom domain Track page views, top links and total
              clicks Quick links for social media, phone and email Import links
              from Linktree Light & Dark Mode included
            </p>
            <Button
              title="Find the right template"
              className="bg-black text-white p-3 mt-2 rounded-lg font-semibold text-sm"
            />
          </div>
        </div>
        {/* Receive Payments */}
        <div className="text-black flex items-center justify-between p-16">
          <div className="w-2/5">
            <h1 className="text-5xl font-extrabold mt-5">
              Receive payments globally, instantly
            </h1>
            <p className=" text-2xl my-7 leading-9">
              Sell to customers from different parts of the world and get paid
              for your work in multiple currencies including USD, GBP, and EUR.
            </p>
            <p className=" text-sm leading-10 mx-8 px-5">
              Set your own prices Simple checkout integration No extra or hidden
              charges on sales Receive tips from your fans across the globe
              Showcase in multiple countries
            </p>
            <Button
              title="Start Getting Paid"
              className="bg-black text-white p-3 mt-2 rounded-lg font-semibold text-sm"
            />
          </div>
          <div>
            <Image
              src="/Disha-Pages.jpeg"
              width={300}
              height={600}
              alt="dishapages"
              className="rounded-2xl"
            />
          </div>
        </div>
        {/* Track your Business */}
        <div className="text-black flex items-center justify-between p-16">
          <div>
            <Image
              src="/Disha-Pages.jpeg"
              width={300}
              height={600}
              alt="dishapages"
              className="rounded-2xl"
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-5xl font-extrabold mt-5">
              Track your business’ performance and optimise for growth
            </h1>
            <p className=" text-2xl my-7 leading-9">
              With Disha Insights, you can make sense of all data relating to
              your business, including page views, clicks, traffic sources,
              conversion and overall sales. See what works and what doesn’t, and
              make changes accordingly.
            </p>
            <p className=" text-sm leading-10 mx-8 px-5">
              Retrieve data based on a set period — daily, weekly, monthly, and
              more Analyse only what matters to you or your business
            </p>
            <Button
              title="Find the right template"
              className="bg-black text-white p-3 mt-2 rounded-lg font-semibold text-sm"
            />
          </div>
        </div>
        {/* Boost Sales */}
        <div className="flex text-black p-16">
          <div className="w-2/5">
            <h1 className="text-5xl font-extrabold">
              Boost sales with Disha Explore
            </h1>
            <p className="text-2xl my-7 leading-9">
              Reach new and existing customers with our dedicated marketplace
              for creators. Users don’t have to spend too much time looking for
              your business — they simply just filter based on your category and
              we’ll suggest you and other similar creators!
            </p>
            <Button
              title="Explore Pages"
              className="bg-disha-orange text-white p-3 mt-2 rounded-lg hover:bg-black font-semibold text-sm"
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/assets/search.png"
                width={250}
                height={100}
                alt="categories"
              />
              <Image
                src="/assets/categories.png"
                width={250}
                height={100}
                alt="categories"
              />
              <Image
                src="/assets/card.png"
                width={200}
                height={150}
                alt="card"
              />
            </div>
          </div>
        </div>
        {/* Trusted Creators */}
        <div className="text-black text-center p-16">
          <h1 className="text-5xl font-extrabold">Trusted by 30k+ Creators</h1>
          <p className="text-2xl my-7 leading-9 w-3/5 text-center mx-auto">
            Thousands of content creators, influencers, artists, writers,
            designers, digital creators, photographers and many more use Disha
            to create an organised digital presence.
          </p>
        </div>
        {/*Sell anything to anyone*/}
        <div className="text-black p-20 bg-disha-bg-grey text-center">
          <h1 className="text-5xl">Sell anything to anyone</h1>
          <h3 className="text-2xl m-10 leading-relaxed">
            Whatever your ideas and creations, Disha gives you the platform to
            engage your existing audience and find even new fans anywhere in the
            world. We’re here for every kind of creator!
          </h3>
          <Services />
        </div>
        {/* Supported by Community */}
        <div className="text-black w-10/12 mx-auto rounded-2xl">
          <h1>Supported by a community</h1>
          <p>
            Our community is the heart of Disha. You can find sneak peeks, vote
            on upcoming features, chat, share and learn from our team.
          </p>
          <Button
            title="Join the Community"
            className="bg-disha-orange text-white p-3 mt-2 rounded-lg hover:bg-black font-semibold text-sm"
          />
        </div>
      </div>
      <footer className=" flex justify-between p-16">
        <div>
          <p className="text-xs">
            Disha is a member of the Stellar Network for Remittances to Creators
            powered by Flutterwave.
          </p>
          <p className="text-xs">
            ©{yearToday} Disha Technology Systems. All rights reserved
          </p>
        </div>
        <div className="flex flex-col">
          <h3>Features</h3>
          <a href="https://getdisha.co/pages">Pages</a>
          <a href="https://getdisha.co/explore">Explore</a>
          <a href="https://pages.disha.ng/settings?custom_payment=true">
            Custom Payment
          </a>
          <a href="https://pages.disha.ng/settings?tippings=true">Tippings</a>
          <a href="https://signature.disha.ng/">Signatures</a>
        </div>
        <div className="flex flex-col">
          <h3>Company</h3>
          <a href="https://disha.ng/about/">About Us</a>
          <a href="https://disha.ng/about/#press">Press</a>
          <a href="https://disha.ng/help">FAQs</a>
        </div>
        <div className="flex flex-col">
          <h3>Legal</h3>
          <a href="https://disha.ng/legal/privacy/">Privacy</a>
          <a href="https://disha.ng/legal/terms/">Terms</a>
          <a href="hhttps://disha.ng/legal/gdpr/">GDPR</a>
        </div>
        <div className="flex flex-col">
          <h3>Connect</h3>
          <a href="https://disha.ng/legal/privacy/">Privacy</a>
          <a href="https://disha.ng/legal/terms/">Terms</a>
          <a href="hhttps://disha.ng/legal/gdpr/">GDPR</a>
        </div>
      </footer>
    </div>
  );
}
