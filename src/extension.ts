import * as vscode from 'vscode';
import { InspectorProvider } from './inspector';
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "oda-studio" is now active!');

	vscode.window.registerTreeDataProvider('oda_studio_inspector', new InspectorProvider(context));

	let disposable = vscode.commands.registerCommand('oda-studio.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from oda-studio!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
