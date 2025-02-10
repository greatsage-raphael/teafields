// app/quiz/page.js
import { Suspense } from 'react';
import Share from '../../components/shareResults';

export const dynamic = 'force-dynamic'; // Force dynamic rendering
// You can also try: export const revalidate = 0;

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="bg-black text-white">Loading...</div>}>
      <Share />
    </Suspense>
  );
}
