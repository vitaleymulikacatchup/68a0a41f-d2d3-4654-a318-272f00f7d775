"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Phone, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState('+380905992233');

  const phoneNumbers = [
    '+380905992233',
    '+380906662233',
    '+380907772233'
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="plain"
      cardStyle="inset"
      primaryButtonStyle="outline"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Eat for Life"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve a Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="relative">
        <HeroLogoBillboardSplit
          logoText="Eat for Life"
          description="Experience culinary excellence where every dish tells a story of tradition, passion, and exceptional ingredients. Discover a dining experience that celebrates the art of fine cuisine."
          buttons={[
            { text: "Reserve Now", href: "#contact" },
            { text: "View Menu", href: "#menu" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137144062-jxz0daft.jpg"
          imageAlt="Fine dining restaurant interior with elegant ambiance"
          frameStyle="card"
        />
        <div className="absolute top-10 right-10 z-50 flex items-center gap-3 px-5 py-3 bg-[var(--card)] text-[var(--foreground)] rounded-full shadow-xl border border-[var(--border)] backdrop-blur-md pointer-events-auto hover:shadow-2xl transition-shadow duration-300">
          <Phone className="w-5 h-5 text-[var(--primary-cta)] flex-shrink-0" />
          <div className="relative">
            <button
              onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
              className="font-semibold text-sm hover:text-[var(--primary-cta)] transition-colors duration-200 cursor-pointer bg-none border-none p-0 flex items-center gap-2"
              aria-label="Call restaurant"
              aria-haspopup="listbox"
              aria-expanded={isPhoneDropdownOpen}
            >
              {selectedPhone}
              <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{
                transform: isPhoneDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }} />
            </button>
            {isPhoneDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden min-w-max z-10">
                {phoneNumbers.map((phone) => (
                  <button
                    key={phone}
                    onClick={() => {
                      setSelectedPhone(phone);
                      setIsPhoneDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-[var(--background-accent)] text-sm text-[var(--foreground)] transition-colors duration-150"
                  >
                    {phone}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-xs text-[var(--foreground)] opacity-75 ml-1 hidden sm:inline">Call for reserve a table</span>
        </div>
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Our Story"
          description="Founded with a commitment to bringing the finest ingredients and culinary techniques to your table, Eat for Life celebrates the intersection of health, sustainability, and exquisite taste. Our chef-driven kitchen sources locally whenever possible, supporting our community while delivering unforgettable dining experiences."
          tag="About Us"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg"
          imageAlt="Professional chef preparing a gourmet dish"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Featured Dishes"
          description="Discover our seasonal specialties crafted with premium ingredients and innovative techniques"
          tag="Menu"
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Pan-Seared Scallops",
              price: "$32",
              variant: "With truffle risotto & microgreens",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137146177-jr92epk1.jpg",
              imageAlt: "Pan-seared scallops with truffle risotto"
            },
            {
              id: "2",
              name: "Herb-Crusted Lamb",
              price: "$45",
              variant: "With seasonal vegetables & red wine reduction",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137147027-6u2cj1i7.jpg",
              imageAlt: "Herb-crusted lamb with seasonal vegetables"
            },
            {
              id: "3",
              name: "Chocolate Soufflé",
              price: "$16",
              variant: "With vanilla bean ice cream & berry compote",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137148895-qyiku07m.jpg",
              imageAlt: "Chocolate soufflé with ice cream"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Guest Reviews"
          description="What our valued guests say about their dining experiences"
          tag="Testimonials"
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              title: "An Unforgettable Evening",
              quote: "From the moment we walked in, we felt welcomed and special. Every course was a masterpiece. The chef truly understands the art of cooking. We'll be back every month.",
              name: "Sarah Johnson",
              role: "Food Critic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262056-5fc6gm95.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              title: "Exceptional Quality and Service",
              quote: "The attention to detail is remarkable. Fresh ingredients, perfectly prepared dishes, and staff who genuinely care about your experience. This is what fine dining should be.",
              name: "Michael Chen",
              role: "Restaurant Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072263646-sc25uolx.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              title: "Worth Every Penny",
              quote: "Celebrated our anniversary here and it was absolutely perfect. The chef's recommendations were spot-on and the wine pairing elevated every dish. Highly recommend!",
              name: "Emily Rodriguez",
              role: "Hospitality Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262868-xhcc7k2g.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              title: "A Culinary Journey",
              quote: "Each bite told a story. The kitchen clearly has a philosophy and they execute it flawlessly. This restaurant respects both the ingredients and the diner. Bravo!",
              name: "David Kim",
              role: "Food Writer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072264557-nwn1qdme.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Reserve Your Table"
          ctaDescription="Experience exceptional cuisine and warm hospitality. Call us or book your reservation online today."
          ctaButton={{
            text: "Make a Reservation",
            href: "tel:+1-555-123-4567"
          }}
          ctaIcon={Phone}
          animationType="slide-up"
          accordionAnimationType="smooth"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We are open Tuesday through Sunday from 5:00 PM to 11:00 PM. Monday is our chef's day off. Brunch is available Saturday and Sunday from 10:00 AM to 2:00 PM."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please mention any restrictions when making your reservation so our chef can prepare something special for you."
            },
            {
              id: "3",
              title: "What is your cancellation policy?",
              content: "We require at least 24 hours notice for cancellations. Cancellations made with less notice may result in a charge of 25% per person."
            },
            {
              id: "4",
              title: "Do you offer private dining?",
              content: "Yes, we have a private dining room available for groups of 8-20 people. Please contact us directly to discuss your private event needs and menu preferences."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Eat for Life"
          copyrightText="© Eat for Life Restaurant 2025. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Reservations", href: "#contact" },
                { label: "Private Events", href: "#" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}