import FooterComponent from '@/components/footer/FooterComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <section breadcrumbs={breadcrumbs}>
            <main>
            
                <HeaderComponent />
                
                {children}

                <FooterComponent />
            
            </main>
        </section>
    );
}
