import { Calendar, CheckCircle, HeartHandshake, Smile, XCircle } from 'lucide-react'
import React from 'react'

const RulesDetailedPoliciesComponent = ({
    rulesModule
}) => {
  return (
    <>
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#3E2723] to-[#2C1810] text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold">
                  {rulesModule.detailedPolicies.booking.title}
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[0]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[1]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[2]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[3]}
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#F5EDE6] to-[#EFE3D9]">
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="w-8 h-8 text-[#5C3A21]" />
                <h3 className="text-2xl font-bold text-[#2C1810]">
                  {rulesModule.detailedPolicies.service.title}
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[0]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[1]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[2]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Smile className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[3]}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default RulesDetailedPoliciesComponent