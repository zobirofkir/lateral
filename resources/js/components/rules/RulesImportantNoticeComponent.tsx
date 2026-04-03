import { AlertTriangle } from 'lucide-react'
import React from 'react'

const RulesImportantNoticeComponent = ({
    rulesModule
}) => {
  return (
    <>
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-6 mb-20 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-1">
                {rulesModule.importantNotice.title}
              </h3>
              <p className="text-amber-700 mb-2 leading-relaxed">
                {rulesModule.importantNotice.content}
              </p>
              <p className="text-sm text-amber-600">
                {rulesModule.importantNotice.lastUpdated}
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default RulesImportantNoticeComponent