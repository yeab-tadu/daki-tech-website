import PageHeader from '@/components/PageHeader';

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        description="Please read these terms and conditions carefully before using Our Service."
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <article className="prose prose-lg max-w-4xl mx-auto">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on DakiTechs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on DakiTechs' website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by DakiTechs at any time.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on DakiTechs' website are provided on an 'as is' basis. DakiTechs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall DakiTechs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DakiTechs' website, even if DakiTechs or a DakiTechs authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
            
            <h2>6. Changes to Terms</h2>
            <p>
              DakiTechs may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
