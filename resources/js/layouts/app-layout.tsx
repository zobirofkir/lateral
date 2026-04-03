import FooterComponent from '@/components/footer/FooterComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import { I18nProvider } from '@/contexts/I18nContext';

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <I18nProvider>
            <main>
            
                <HeaderComponent />
                
                {children}

                <FooterComponent />
            
            </main>
        </I18nProvider>
    );
}
