import { Star } from 'lucide-react';
import React from 'react'

const RulesGridComponent = ({
    rulesModule,
    rules,
    getTypeStyles
}) => {
  return (
    <>
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Star className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">{rulesModule.rulesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              {rulesModule.rulesSection.title}
            </h2>
            <p className="text-lg text-[#5C3A21] max-w-2xl mx-auto">
              {rulesModule.rulesSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              const styles = getTypeStyles(rule.type);
              return (
                <div
                  key={index}
                  className={`${styles.bg} border ${styles.border} rounded-2xl p-6 transition-all duration-300 ${styles.hoverBg} hover:shadow-xl hover:-translate-y-1 group`}
                >
                  <div className={`${styles.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${styles.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${styles.text}`}>
                    {rule.title}
                  </h3>
                  <p className="text-[#5C3A21] mb-3 leading-relaxed">{rule.description}</p>
                  <p className="text-sm text-[#8B6B4A] border-t border-[#E6D5C3] pt-3 mt-2">{rule.details}</p>
                </div>
              );
            })}
          </div>
        </div>
    </>
  )
}

export default RulesGridComponent