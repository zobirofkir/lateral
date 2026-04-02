import FooterComponent from '@/components/footer/FooterComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import { I18nProvider } from '@/contexts/I18nContext';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <I18nProvider>
            <section breadcrumbs={breadcrumbs}>
                <main>
                
                    <HeaderComponent />
                    
                    {children}

                    <FooterComponent />
                
                </main>
            </section>
        </I18nProvider>
    );
}
