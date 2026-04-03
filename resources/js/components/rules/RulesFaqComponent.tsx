import { ChevronDown, ChevronUp, Gift } from 'lucide-react'
import React from 'react'

const RulesFaqComponent = ({
    rulesModule,
    faqs,
    setOpenFaq,
    openFaq
}) => {
  return (
    <>
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Gift className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">
                {rulesModule.faqSection.badge}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              {rulesModule.faqSection.title}
            </h2>
            <p className="text-lg text-[#5C3A21]">
              {rulesModule.faqSection.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E6D5C3] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#FDF8F5] transition-colors"
                >
                  <span className="font-semibold text-[#2C1810]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#5C3A21]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#5C3A21]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-[#5C3A21] border-t border-[#E6D5C3] pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default RulesFaqComponent