import RulesHeroSectionComponent from '@/components/rules/RulesHeroSectionComponent';
import RulesGridComponent from '@/components/rules/RulesGridComponent';
import RulesDetailedPoliciesComponent from '@/components/rules/RulesDetailedPoliciesComponent';
import RulesFaqComponent from '@/components/rules/RulesFaqComponent';
import RulesImportantNoticeComponent from '@/components/rules/RulesImportantNoticeComponent';
import RulesContactComponent from '@/components/rules/RulesContactComponent';
import { useRules } from '@/hooks/useRules';

const RulesPage = () => {

  const {
    openFaq,
    setOpenFaq,
    rulesModule,
    rules,
    faqs,
    getTypeStyles
  } = useRules();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Brown Theme */}
      <RulesHeroSectionComponent rulesModule={rulesModule} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Rules Grid */}
        <RulesGridComponent 
            rulesModule={rulesModule}
            rules={rules}
            getTypeStyles={getTypeStyles}
        />

        {/* Detailed Policies Section - Brown Theme */}
        <RulesDetailedPoliciesComponent rulesModule={rulesModule} />

        {/* FAQ Section - Brown Theme */}
        <RulesFaqComponent 
          rulesModule={rulesModule}
          faqs={faqs}
          setOpenFaq={setOpenFaq}
          openFaq={openFaq}
        />

        {/* Important Notice - Brown Theme */}
        <RulesImportantNoticeComponent rulesModule={rulesModule} />

        {/* Contact Section - Brown Theme */}
        <RulesContactComponent rulesModule={rulesModule} />
        
      </div>
    </div>
  );
};

export default RulesPage;