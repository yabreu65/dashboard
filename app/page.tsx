'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { DashboardContent } from '@/components/dashboard/DashboardContent';
import { AnalyticsContent } from '@/components/analytics/AnalyticsContent';
import { CustomersContent } from '@/components/customers/CustomersContent';
import { ProductsContent } from '@/components/products/ProductsContent';
import { useSidebar } from '@/hooks/useSidebar';

export default function Home() {
  const { isOpen, toggle, close } = useSidebar(true);
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Cerrar sidebar en móvil después de seleccionar un tab
    if (window.innerWidth < 1024) {
      close();
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'customers':
        return <CustomersContent />;
      case 'products':
        return <ProductsContent />;
      case 'transactions':
        return <DashboardContent />; // Por ahora muestra el dashboard
      case 'messages':
        return <DashboardContent />; // Por ahora muestra el dashboard
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onClose={close}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <Header onMenuClick={toggle} />

        {/* Content */}
        {renderContent()}
      </main>
    </div>
  );
}
