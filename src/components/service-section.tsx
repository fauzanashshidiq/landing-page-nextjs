import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceSection() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col md:flex-row p-8 md:p-12">
          <div className="md:w-1/3 mb-8 md:mb-0 md:pr-12">
            <p className="text-gray-400 text-sm tracking-wide pt-4.5">
              Our Services
            </p>
          </div>

          <div className="flex-1">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem
                value="item-1"
                className="border-b border-gray-700"
              >
                <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                  Visual Branding
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-400 text-base">
                  Your brand is more than just a logo; it's the essence of your
                  business. We create compelling brand identities that tell your
                  unique story and resonate with your target audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-gray-700"
              >
                <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                  Creative Campaign
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-gray-700"
              >
                <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                  UI/UX Design
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-gray-700"
              >
                <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                  Development
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
