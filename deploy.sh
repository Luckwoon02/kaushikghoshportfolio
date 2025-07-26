#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in the 'dist' folder"
    echo ""
    echo "🚀 To deploy to GitHub Pages:"
    echo "1. Push your changes to GitHub"
    echo "2. Go to your repository Settings > Pages"
    echo "3. Set source to 'GitHub Actions'"
    echo "4. The workflow will automatically deploy your app"
    echo ""
    echo "🌐 Your app will be available at:"
    echo "https://[your-username].github.io/kaushikghoshportfolio/"
else
    echo "❌ Build failed!"
    exit 1
fi 