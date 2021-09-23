import DocumentLayout from '../../components/documentLayout';
import Link from 'next/link'

export default function Index() {
    return (
        <DocumentLayout
            title="Learn"
            description="Learn the basics of EasyMLN."
            video_url="" >

        EasyMLN makes it easy and simple to explore, analyze, and visualize complex data. Get started by watching the above introduction or following one of the links below.

        Basics
        {[
            'workflow', 
            'experiment'
        ].map(link => {
            <Link key={link} href={`/learn/${link}`}>
                <a key={link}>{link}</a>
            </Link>})}

        Tutorials
        {[
            'Build a covid visualization dashboard', 
            'Weather Forecasting with Linear Models'
        ].map(link => {
            <Link key={link} href={`/learn/${link}`}>
                <a key={link}>{link}</a>
            </Link>})}

        </DocumentLayout>
    )
}